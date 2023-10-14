"use client";
import useSearch from "./useSearch";
import { Button, Input } from "@nextui-org/react";
import Briefcase from "./icons/Briefcase";
import Location from "./icons/Location";
interface Props {
  direction?: string;
}
const SearchBox = ({ direction }: Props) => {
  const { handleSubmit, onSubmit, register } = useSearch();

  const inputClass = direction != "col" ? " w-full lg:w-1/3  " : " w-full ";
  const btnClass = direction != "col" ? " w-full lg:w-1/6  " : " w-full ";
  direction ="flex-" + direction
  const formClass = `flex flex-wrap ${direction}  items-center  justify-center  gap-4 w-full  lg:p-5 `;

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className={formClass}>
        <div className={inputClass}>
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
        <div className={inputClass}>
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
        <div className={btnClass}>
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
