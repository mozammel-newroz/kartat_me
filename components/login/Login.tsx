"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { object, z } from "zod";

import { Button } from "@/components/ui/button";
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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState<any>("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const inputSchema = z.object({
    email: z.string().min(3).email(),
    password: z.string().min(8),
  });

  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    try {
      let parseInput = inputSchema.safeParse({ email, password });
      if (!parseInput.success) {
        console.log("error", parseInput.error.flatten().fieldErrors);
        let err: any = parseInput.error.flatten().fieldErrors;
        console.log("err", err);
        setError(err);
      } else {
        router.push(`/otp?email=${email}`);
      }
    } catch (error) {}
  };

  return (
    <main className="flex h-dvh bg-slate-400 justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Kartat Panel</CardTitle>
          <CardDescription>Login Kartat Panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
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
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="bg-secondary ">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
