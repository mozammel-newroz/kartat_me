"use server";
import { cookies } from "next/headers";

interface dataprops {
  data: any;
}

const OnSubmit = ({ data }: dataprops) => {
  const cookiesList = cookies();
  cookiesList.set("token", data.token, { secure: true });
  cookiesList.set("email", data.email, { secure: true });
  cookiesList.set("name", data.name, { secure: true });

  return false;
};

export default OnSubmit;
