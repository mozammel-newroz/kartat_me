"use client";
import axios from "axios";
import { motion, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { bearerToken } from "@/Utils/Token";
import { ReloadIcon } from "@radix-ui/react-icons";

const Profile = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [editScreen, setEditScreen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const updateData = async () => {
    setLoading(true);
    try {
      const token = await bearerToken();
      let data = {
        name,
        mobile,
      };
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/profile`,
        method: "put",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("res:", res);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const token = await bearerToken();
      let res = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("res:", res.data.data);
      setData(res.data.data);
      setName(res.data.data?.name);
      setMobile(res.data.data?.mobile);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {!editScreen && (
          <motion.div
            initial={{ x: "-50px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
          >
            <Card>
              <CardHeader className="">
                <div className="flex justify-between">
                  <h2 className="text-2xl mb-3">Profile Information</h2>
                  <Button
                    variant="outline"
                    className="rounded-full h-12 w-12"
                    onClick={() => setEditScreen(!editScreen)}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </div>
                <CardDescription>Name</CardDescription>
                <CardTitle>{data?.name}</CardTitle>
                <br />
                <CardDescription>Email</CardDescription>
                <CardTitle>{data?.email}</CardTitle>
                <br />
                <CardDescription>Mobile Number</CardDescription>
                <CardTitle>{data?.mobile ? data?.mobile : "-----"}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        )}
        {editScreen && (
          <motion.div
            initial={{ x: "50px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
          >
            <Card>
              <CardHeader>
                <h2 className="text-2xl mb-3">Update Profile Information</h2>
                <CardDescription>Update your information</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Mobile</Label>
                      <Input
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setEditScreen(!editScreen)}
                >
                  Cancel
                </Button>
                <Button onClick={updateData}>
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Update
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Profile;
