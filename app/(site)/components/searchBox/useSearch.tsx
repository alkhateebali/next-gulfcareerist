import { useForm } from "react-hook-form";
import { Search } from "@/types/jobs/Job";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const { register, handleSubmit } = useForm<Search>();
  const router = useRouter();
  const onSubmit = (data: Search) => {
    const queryString = `location=${data.location}&keywords=${data.keywords}&page=${data.page}`;
    const url = `http://localhost:3000/?${queryString}`;
    router.push(url);
  };
  return { handleSubmit, onSubmit, register };
};

export default useSearch;
