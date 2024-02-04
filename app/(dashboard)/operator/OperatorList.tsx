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

const OperatorList = () => {
  const [bundleList, setBundleList] = useState([]);
  const [operatorLisO, setOperatorList] = useState([]);

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
      const uri = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/operator`);
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
          <h2 className="text-xl">Operator List</h2>
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
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!loading &&
            data?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.category?.name}</TableCell>
                <TableCell>
                  {item?.status ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </TableCell>
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

export default OperatorList;
