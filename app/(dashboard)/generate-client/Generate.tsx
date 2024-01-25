"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { bearerToken } from "@/Utils/Token";

const Generate = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [gScreen, setGScreen] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const token = await bearerToken();
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/client/generate`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("res:", res.data);
      setData(res.data);
      setGScreen(true);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="flex justify-center">
      <Card className="w-[450px] mt-[200px]">
        <CardHeader className="flex flex-col  gap-4">
          {!gScreen && (
            <div className="flex flex-col items-center gap-4">
              <CardTitle>Generate Client Secret?</CardTitle>
              <Button onClick={handleGenerate}>
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Generate Now
              </Button>
            </div>
          )}

          {gScreen && (
            <div className="flex flex-col items-center gap-4">
              <CardTitle className="text-green-500">
                Generated Client Secret!
              </CardTitle>
              <CardDescription className="text-black">
                Copy and store in safe palace
              </CardDescription>
            </div>
          )}
        </CardHeader>
        {gScreen ? (
          <CardContent>
            <div className="grid w-full items-center gap-4 mt-10">
              <div className="flex flex-col space-y-1.5">
                <CardDescription>Client Id</CardDescription>
                <Label htmlFor="name">{data?.data?.client_id}</Label>

                <br />
                <CardDescription>Client Secret</CardDescription>
                <Label htmlFor="name">{data?.data?.client_secret}</Label>
              </div>
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <div className="grid w-full items-center gap-4 mt-10 text-center">
              <CardDescription>
                Click Generate Now button to generate client secret.
              </CardDescription>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Generate;
