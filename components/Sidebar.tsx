"use client";
import Link from "next/link";
import { getCookie } from "cookies-next";
import UserDropdown from "./appbar/UserDropdown";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Sidebar({ children }: any) {
  const [showOne, setShowOne] = useState(false);
  const [balance, setBalance] = useState("");
  const handleOne = () => {
    setShowOne(!showOne);
  };

  const getBalance = () => {
    let b: any = getCookie("balance");
    setBalance(b);
  };

  useEffect(() => {
    getBalance();
  }, []);

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
            <ul className="pt-4 pb-4 space-y-2 text-sm">
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
                  <span>Dashboard</span>
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
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="flex justify-between w-full items-center">
                    <span>Account</span>
                    <div className="text-right">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>

                {showOne && (
                  <ul id="dropdown-1" className=" py-2 space-y-2">
                    <li>
                      <Link
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-12   bg-slate-100"
                        href="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-12   bg-slate-100"
                        href="/recharge"
                      >
                        Recharge History
                      </Link>
                    </li>
                  </ul>
                )}
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
                  href="/transaction"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.89949 9.49998C3.89949 9.72089 3.7204 9.89997 3.49949 9.89997C3.27857 9.89997 3.09949 9.72089 3.09949 9.49998L3.09949 2.46566L1.78233 3.78282C1.62612 3.93903 1.37285 3.93903 1.21664 3.78282C1.06043 3.62661 1.06043 3.37334 1.21664 3.21713L3.21664 1.21713C3.29166 1.14212 3.3934 1.09998 3.49949 1.09998C3.60557 1.09998 3.70732 1.14212 3.78233 1.21713L5.78233 3.21713C5.93854 3.37334 5.93854 3.62661 5.78233 3.78282C5.62612 3.93903 5.37285 3.93903 5.21664 3.78282L3.89949 2.46566L3.89949 9.49998ZM8.49998 1.99998C8.22383 1.99998 7.99998 2.22383 7.99998 2.49998C7.99998 2.77612 8.22383 2.99998 8.49998 2.99998H14.5C14.7761 2.99998 15 2.77612 15 2.49998C15 2.22383 14.7761 1.99998 14.5 1.99998H8.49998ZM8.49998 4.99998C8.22383 4.99998 7.99998 5.22383 7.99998 5.49998C7.99998 5.77612 8.22383 5.99998 8.49998 5.99998H14.5C14.7761 5.99998 15 5.77612 15 5.49998C15 5.22383 14.7761 4.99998 14.5 4.99998H8.49998ZM7.99998 8.49998C7.99998 8.22383 8.22383 7.99998 8.49998 7.99998H14.5C14.7761 7.99998 15 8.22383 15 8.49998C15 8.77612 14.7761 8.99998 14.5 8.99998H8.49998C8.22383 8.99998 7.99998 8.77612 7.99998 8.49998Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Transaction</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/statement"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Statement</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/bundle"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bundle</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  href="/operator"
                  className="flex items-center p-2 space-x-3 rounded-md  hover:bg-yellow-50 bg-slate-100 transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.49988 2.00012C1.77602 2.00012 1.99988 1.77626 1.99988 1.50012C1.99988 1.22398 1.77602 1.00012 1.49988 1.00012C1.22374 1.00012 0.999878 1.22398 0.999878 1.50012C0.999878 1.77626 1.22374 2.00012 1.49988 2.00012ZM4.49988 2.00012C4.77602 2.00012 4.99988 1.77626 4.99988 1.50012C4.99988 1.22398 4.77602 1.00012 4.49988 1.00012C4.22374 1.00012 3.99988 1.22398 3.99988 1.50012C3.99988 1.77626 4.22374 2.00012 4.49988 2.00012ZM7.99988 1.50012C7.99988 1.77626 7.77602 2.00012 7.49988 2.00012C7.22374 2.00012 6.99988 1.77626 6.99988 1.50012C6.99988 1.22398 7.22374 1.00012 7.49988 1.00012C7.77602 1.00012 7.99988 1.22398 7.99988 1.50012ZM10.4999 2.00012C10.776 2.00012 10.9999 1.77626 10.9999 1.50012C10.9999 1.22398 10.776 1.00012 10.4999 1.00012C10.2237 1.00012 9.99988 1.22398 9.99988 1.50012C9.99988 1.77626 10.2237 2.00012 10.4999 2.00012ZM13.9999 1.50012C13.9999 1.77626 13.776 2.00012 13.4999 2.00012C13.2237 2.00012 12.9999 1.77626 12.9999 1.50012C12.9999 1.22398 13.2237 1.00012 13.4999 1.00012C13.776 1.00012 13.9999 1.22398 13.9999 1.50012ZM1.49988 14.0001C1.77602 14.0001 1.99988 13.7763 1.99988 13.5001C1.99988 13.224 1.77602 13.0001 1.49988 13.0001C1.22374 13.0001 0.999878 13.224 0.999878 13.5001C0.999878 13.7763 1.22374 14.0001 1.49988 14.0001ZM1.99988 10.5001C1.99988 10.7763 1.77602 11.0001 1.49988 11.0001C1.22374 11.0001 0.999878 10.7763 0.999878 10.5001C0.999878 10.224 1.22374 10.0001 1.49988 10.0001C1.77602 10.0001 1.99988 10.224 1.99988 10.5001ZM1.49988 8.00012C1.77602 8.00012 1.99988 7.77626 1.99988 7.50012C1.99988 7.22398 1.77602 7.00012 1.49988 7.00012C1.22374 7.00012 0.999878 7.22398 0.999878 7.50012C0.999878 7.77626 1.22374 8.00012 1.49988 8.00012ZM1.99988 4.50012C1.99988 4.77626 1.77602 5.00012 1.49988 5.00012C1.22374 5.00012 0.999878 4.77626 0.999878 4.50012C0.999878 4.22398 1.22374 4.00012 1.49988 4.00012C1.77602 4.00012 1.99988 4.22398 1.99988 4.50012ZM13.4999 11.0001C13.776 11.0001 13.9999 10.7763 13.9999 10.5001C13.9999 10.224 13.776 10.0001 13.4999 10.0001C13.2237 10.0001 12.9999 10.224 12.9999 10.5001C12.9999 10.7763 13.2237 11.0001 13.4999 11.0001ZM13.9999 7.50012C13.9999 7.77626 13.776 8.00012 13.4999 8.00012C13.2237 8.00012 12.9999 7.77626 12.9999 7.50012C12.9999 7.22398 13.2237 7.00012 13.4999 7.00012C13.776 7.00012 13.9999 7.22398 13.9999 7.50012ZM13.4999 5.00012C13.776 5.00012 13.9999 4.77626 13.9999 4.50012C13.9999 4.22398 13.776 4.00012 13.4999 4.00012C13.2237 4.00012 12.9999 4.22398 12.9999 4.50012C12.9999 4.77626 13.2237 5.00012 13.4999 5.00012ZM4.99988 13.5001C4.99988 13.7763 4.77602 14.0001 4.49988 14.0001C4.22374 14.0001 3.99988 13.7763 3.99988 13.5001C3.99988 13.224 4.22374 13.0001 4.49988 13.0001C4.77602 13.0001 4.99988 13.224 4.99988 13.5001ZM7.49988 14.0001C7.77602 14.0001 7.99988 13.7763 7.99988 13.5001C7.99988 13.224 7.77602 13.0001 7.49988 13.0001C7.22374 13.0001 6.99988 13.224 6.99988 13.5001C6.99988 13.7763 7.22374 14.0001 7.49988 14.0001ZM10.9999 13.5001C10.9999 13.7763 10.776 14.0001 10.4999 14.0001C10.2237 14.0001 9.99988 13.7763 9.99988 13.5001C9.99988 13.224 10.2237 13.0001 10.4999 13.0001C10.776 13.0001 10.9999 13.224 10.9999 13.5001ZM13.4999 14.0001C13.776 14.0001 13.9999 13.7763 13.9999 13.5001C13.9999 13.224 13.776 13.0001 13.4999 13.0001C13.2237 13.0001 12.9999 13.224 12.9999 13.5001C12.9999 13.7763 13.2237 14.0001 13.4999 14.0001ZM3.99988 5.00012C3.99988 4.44784 4.44759 4.00012 4.99988 4.00012H9.99988C10.5522 4.00012 10.9999 4.44784 10.9999 5.00012V10.0001C10.9999 10.5524 10.5522 11.0001 9.99988 11.0001H4.99988C4.44759 11.0001 3.99988 10.5524 3.99988 10.0001V5.00012ZM4.99988 5.00012H9.99988V10.0001H4.99988V5.00012Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Operator</span>
                </Link>
              </li>

              {/* <li className="rounded-sm">
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
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="topBar">
          <div className=" py-2 px-6 flex justify-between gap-12 items-center text-white">
            <div className="flex justify-between  flex-1 items-center">
              <p className="text-lg">Welcome to Kartat Panel</p>
             <p className="text-sm" ></p>
             <Button variant="outline" className="text-primary bg-transparent" >  Balance: {balance}</Button>
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
