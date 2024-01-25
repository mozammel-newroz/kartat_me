// import Login from "@/components/login/Login";
import LoginLayout from "@/components/login/LoginLayout";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      {/* <Login /> */}
      <LoginLayout />
      <Toaster position="top-right" richColors />
    </>
  );
}
