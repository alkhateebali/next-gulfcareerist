"use client";
import useSearch from "./useSearch";
import { Button, Input } from "@nextui-org/react";
import Briefcase from "./icons/Briefcase";
import Location from "./icons/Location";

const SearchBox = () => {
  const { handleSubmit, onSubmit, register } = useSearch();
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-wrap  items-center  justify-center  gap-4 w-full  lg:p-5">
          <div className=" w-full lg:w-1/3  ">
            <Input
              type="text"
              placeholder="Job title, keywords or company"
              labelPlacement="outside"
              size="lg"
              variant={"bordered"}
              startContent={"What"}
              endContent={<Briefcase />}
              {...register("keywords")}
            />
          </div>
          <div className=" w-full lg:w-1/3  ">
            <Input
              type="text"
              placeholder="Town or region in Gulf countries"
              labelPlacement="outside"
              size="lg"
              variant={"bordered"}
              startContent={"Where"}
              endContent={<Location />}
              {...register("location")}
            />
            <input hidden value={1} {...register("page")} />
          </div>
          <div className="w-full lg:w-1/6 ">
            <Button
              type="submit"
              color="primary"
              size="lg"
              radius="none"
              fullWidth={true}
            >
              Search
            </Button>
          </div>
        </div>
    </form>
  );
};

export default SearchBox;
