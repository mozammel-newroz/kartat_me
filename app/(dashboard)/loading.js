import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="wrapper">
      <div className="grid gap-4 grid-cols-2 ">
        <div>
          <Skeleton className="w-full h-[100px] rounded-lg" />
        </div>
        <div>
          <Skeleton className="w-full h-[20px] rounded-full" />
        </div>
        <div>
          <Skeleton className="w-full h-[20px] rounded-full" />
        </div>
        <div>
          <Skeleton className="w-full h-[20px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default loading;
