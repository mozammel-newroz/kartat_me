// import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/recharge",
  "/transaction",
  "/statement",
  "/bundle",
  "/operator",
  "/generate-client",
];

export default function middleware(req: NextRequest) {
  const cookieItem = cookies();
  const auth = cookieItem.has("token");
  if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
