"use client";
import * as React from "react";
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
import OtpInput from "react-otp-input";
import { useSearchParams, useRouter } from "next/navigation";

export default function Login() {
  const [otp, setOtp] = React.useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <main className="flex h-dvh bg-slate-400 justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Kartat Panel</CardTitle>
          <CardDescription>
            Please check {searchParams.get("email")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
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
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="bg-secondary ">
            Cancel
          </Button>
          <Button
            onClick={() => {
              router.push(`/dashboard`);
            }}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
