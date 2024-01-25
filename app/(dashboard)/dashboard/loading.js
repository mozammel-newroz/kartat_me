import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="wrapper">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <Skeleton className="w-full h-[100px] rounded-md" />
        </div>
        <div>
          <Skeleton className="w-full h-[100px] rounded-md" />
        </div>
        <div>
          <Skeleton className="w-full h-[100px] rounded-md" />
        </div>
        <div>
          <Skeleton className="w-full h-[100px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default loading;
