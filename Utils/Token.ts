"use server";

import { cookies } from "next/headers";

export const bearerToken = () => {
  let token: any = cookies().get("token");
  return token?.value;
};
