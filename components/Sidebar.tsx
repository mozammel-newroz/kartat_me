"use client";
import Link from "next/link";
import UserDropdown from "./appbar/UserDropdown";
import { useState } from "react";
import { logout } from "@/Utils/logout";
import Image from "next/image";

export default function Sidebar({ children }: any) {
  const [showOne, setShowOne] = useState(false);
  const handleOne = () => {
    setShowOne(!showOne);
  };
  return (
    <div className="flex ">
      <div className="flex flex-col h-screen p-3 bg-slate-200 shadow w-64 shrink-0 ">
        <div className="space-y-3">
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold ">
              <Image src="/logo.png" alt="" width={115} height={28} />
            </h2>
          </div>
          <div className="flex-1">
            <ul className="pt-4 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  href="/profile"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Profile</span>
                </Link>
              </li>
              {/* <li className="rounded-sm">
                <Link
                  href="/generate-client"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Generate Client</span>
                </Link>
              </li> */}

              <li className="rounded-sm">
                <Link
                  href="/purchase"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Purchase</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                  onClick={handleOne}
                  role="button"
                  data-collapse-toggle="dropdown-1"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>multi</span>
                </Link>

                {showOne && (
                  <ul id="dropdown-1" className=" py-2 space-y-2">
                    <li>
                      <Link
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-12   bg-slate-100"
                        href="/purchase"
                      >
                        Purchase
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-12   bg-slate-100"
                        href="/purchase"
                      >
                        Purchase
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="rounded-sm">
                <Link
                  href="/"
                  role="button"
                  onClick={() => logout()}
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="bg-slate-700 pb-20">
          <div className=" py-2 px-6 flex justify-between items-center text-white">
            <div className="">
              <h3 className="text-lg">Welcome to application</h3>
            </div>
            <div className="">
              <UserDropdown />
            </div>
          </div>
        </div>
        <div className="p-6 ">{children}</div>
      </div>
    </div>
  );
}
