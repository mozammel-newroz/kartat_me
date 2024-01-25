import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const TableLoading = () => {
  return (

      <div className="grid gap-4 grid-cols-1 ">
          <Skeleton className="w-full h-[50px] rounded-lg" />
          <Skeleton className="w-full h-[50px] rounded-lg" />
          <Skeleton className="w-full h-[50px] rounded-lg" />
          <Skeleton className="w-full h-[50px] rounded-lg" />
        </div>

  )
}

export default TableLoading