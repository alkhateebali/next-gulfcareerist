'use client'
import { Skeleton } from '@nextui-org/react'


const SearchBoxSkelton = () => {
  return (
    <div className="container mx-auto py-10">
    <div className="flex flex-wrap  items-end  justify-center  gap-4 ">
      <Skeleton className="rounded-lg  w-full lg:w-1/3  ">
        <div className="h-12 rounded-lg bg-default-300"></div>
      </Skeleton>
      <Skeleton className=" rounded-lg  w-full lg:w-1/3  ">
        <div className="h-12 rounded-lg bg-default-300"></div>
      </Skeleton>
      <Skeleton className="rounded-lg  w-full lg:w-1/6 ">
        <div className="h-12 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  </div>
  )
}

export default SearchBoxSkelton