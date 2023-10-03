import { useForm } from "react-hook-form";
import { Search } from "@/app/types/jobs/Job";

const useSearch = () => {
  const { register, handleSubmit } = useForm<Search>();

  const onSubmit = (data: Search) => {
    alert(data.keywords);
  };
  return { handleSubmit, onSubmit, register };
};

export default useSearch;
