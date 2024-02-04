"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "rc-pagination";
import { bearerToken } from "@/Utils/Token";
import "../../pagination.css";
import TableLoading from "../TableLoading";
import { Input } from "@/components/ui/input";

const RechargeList = () => {
  const [bundleList, setBundleList] = useState([]);
  const [operatorList, setOperatorList] = useState([]);

  const [transaction_id, setTransaction_id] = useState("");
  const [operator_id, setOperator_id] = useState("");
  const [bundle_id, setBundle_id] = useState("");

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [page, setPage] = useState("");
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const getData = async () => {
    setLoading(true);

    try {
      const token = await bearerToken();
      const uri = new URL(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/vendor/recharge/history`
      );
      uri.searchParams.append("page", page);
      // uri.searchParams.append("transaction_id", transaction_id);
      // uri.searchParams.append("operator_id", operator_id);
      // uri.searchParams.append("bundle_id", bundle_id);

      let res = await axios({
        url: `${uri}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setTotal(res.data?.data?.total);
      setPageSize(res.data?.data?.per_page);
      setData(res.data?.data?.data);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  // const getCancelData = async () => {
  //   setLoading(true);

  //   try {
  //     const token = await bearerToken();
  //     const uri = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/statement`);

  //     let res = await axios({
  //       url: `${uri}`,
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setTotal(res.data?.data?.total);
  //     setPageSize(res.data?.data?.per_page);
  //     setData(res.data?.data?.data);
  //   } catch (error) {
  //     console.log("err", error);
  //   }
  //   setLoading(false);
  // };
  // const getInitData = async () => {
  //   setLoading(true);
  //   setSearchLoading(true);
  //   setPage("1");
  //   try {
  //     const token = await bearerToken();
  //     const uri = new URL(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction`
  //     );

  //     uri.searchParams.append("transaction_id", transaction_id);

  //     let res = await axios({
  //       url: `${uri}`,
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setTotal(res.data?.data?.total);
  //     setPageSize(res.data?.data?.per_page);
  //     setData(res.data?.data?.data);
  //   } catch (error) {
  //     console.log("err", error);
  //   }
  //   setLoading(false);
  //   setSearchLoading(false);
  // };

  const handlePageChange = (e: any) => {
    console.log("e", e);
    setPage(e);
  };

  // const handleSearch = () => {
  //   setPage("1");
  //   getInitData();
  // };

  // const handleCancel = () => {
  //   setTransaction_id("");
  //   getCancelData();
  // };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <div className="shadow-md p-2 border  rounded-md mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Recharge History</h2>
          {/* <div className=" flex gap-3 items-center">
            <Input
              type="text"
              placeholder="Transaction Id"
              value={transaction_id}
              onChange={(e) => setTransaction_id(e.target.value)}
            />

            <div
              className="text-gray-400 hover:text-gray-300 cursor-pointer "
              role="button"
              onClick={handleSearch}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div
              className="text-red-300 hover:text-red-400 cursor-pointer "
              role="button"
              onClick={handleCancel}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div> */}
        </div>
      </div>

      <Table className=" border">
        <TableHeader>
          <TableRow>
            <TableHead>reference_number</TableHead>
            <TableHead>amount</TableHead>
            <TableHead>remarks</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!loading &&
            data?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{item?.reference_number}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.remarks}</TableCell>
                <TableCell>{item?.created_at}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={20}>
              {loading && <TableLoading />}
              <div className="flex justify-center">
                {!searchLoading && (
                  <Pagination
                    total={total}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                  />
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default RechargeList;
