import { useForm } from "react-hook-form";
import { Search } from "@/types/jobs/Job";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const { register, handleSubmit } = useForm<Search>();
  const router = useRouter();
  const onSubmit = (searchParams: Search) => {
    const SEARCH_URL =process.env.SEARCH_URL ?  process.env.SEARCH_URL : ""
    const search= new URLSearchParams;
    search.append('location',searchParams.location)
    search.append('keywords',searchParams.keywords)
    search.append('page',searchParams.page.toString())
    const url = SEARCH_URL+ `/search?${search}`;
    router.push(url);
  };
  return { handleSubmit, onSubmit, register };
};

export default useSearch;
