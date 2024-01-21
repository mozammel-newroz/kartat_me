"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

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
  const [email, setEmail] = React.useState("");

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
                  onChange={(e) => setEmail(e.target.value)}
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
              router.push(`/otp?email=${email}`);
            }}
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
