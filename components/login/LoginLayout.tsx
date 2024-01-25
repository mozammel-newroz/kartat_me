"use client";
import * as React from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion, animate } from "framer-motion";

import { useRouter } from "next/navigation";
import { object, z } from "zod";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import OnSubmit from "./OnSubmit";
import Image from "next/image";

export default function LoginLayout() {
  const router = useRouter();
  const [email, setEmail] = React.useState<any>("");
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [reference, setReference] = React.useState("");

  const [error, setError] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [otpScreen, setOtpScreen] = React.useState(false);

  const inputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const handleShow = () => {
    setShow(!show);
  };

  const handleCancel = () => {
    setOtpScreen(false);
    setEmail("");
    setPassword("");
    setOtp("");
    setReference("");
  };

  const handleContinue = async () => {
    setLoading(true);
    try {
      let parseInput = inputSchema.safeParse({ email, password });
      if (!parseInput.success) {
        console.log("error", parseInput.error.flatten().fieldErrors);
        let err: any = parseInput.error.flatten().fieldErrors;
        console.log("err", err);
        setError(err);
      } else {
        try {
          let data = {
            email,
            password,
          };
          let res = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            method: "post",
            data: data,
            headers: {
              // Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          if (res.data.status) {
            setReference(res.data.data.reference);
            setOtpScreen(true);
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log("err", error);
        }
      }
    } catch (error: any) {
      console.log("err", error);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      let data = {
        reference,
        otp,
      };
      console.log('send data', data)
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify`,
        method: "post",
        data: data,
        headers: {
          // Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Content-Language": "en",
        },
      });
      console.log("res", res);
      toast.error(res.data.message);
      if (res.data.status) {
        OnSubmit(res.data);
        // cookiesList.set('token', res.data.token )
        // cookiesList.set('email', res.data.email , { secure: true })
        // cookiesList.set('name', res.data.name , { secure: true })

        router.push(`/dashboard`);
      }
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  return (
    <main className="flex h-dvh bg-slate-500 justify-center items-center">
      {!otpScreen && (
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
        >
          <Card className="w-[450px]">
            <CardHeader>
              <Image src="/logo.png" alt="" width={115} height={28} />
              <CardDescription>Login to Kartat Panel</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email address"
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  {/* @ts-ignore */}
                  {error && error?.email && (
                    <p className="text-sm text-red-300 ml-1">
                      {/* @ts-ignore */}
                      {error?.email.toString()}
                    </p>
                  )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Password</Label>
                  <div className="flex justify-end items-center relative">
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="border border-gray-400 rounded-lg p-4 w-full"
                    />
                    <div
                      className="absolute mr-0 w-10 cursor-pointer"
                      onClick={handleShow}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* @ts-ignore */}
                  {error && error?.password && (
                    <p className="text-sm text-red-300 ml-1">
                      {/* @ts-ignore */}
                      {error?.password.toString()}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                onClick={() => {
                  handleContinue();
                }}
              >
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Continue
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {otpScreen && (
        <motion.div
          initial={{ x: "50px", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
        >
          <Card className="w-[450px]">
            <CardHeader>
              <Image src="/logo.png" alt="" width={115} height={28} />

              <CardDescription>Login to Kartat Panel</CardDescription>
            </CardHeader>

            <div className="grid w-full items-center gap-4 p-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">OTP</Label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  inputStyle={{ width: "100%", height: 45 }}
                  renderInput={(props) => <Input {...props} />}
                />
              </div>
            </div>

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="bg-secondary "
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
              >
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </main>
  );
}
