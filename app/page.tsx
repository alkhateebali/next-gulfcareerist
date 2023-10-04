import JobsGrid from "./components/jobsGrid/JobsGrid";
import SearchBox from "./components/searchBox/SearchBox";
import { Search } from "./types/jobs/Job";

interface Props {
  searchParams:  {
  keywords: string;
  location: string;
  page: number;
}
}


export default function Home({ searchParams }: {  searchParams:  {
  keywords: string;
  location: string;
  page: number;
}}) {

  return (
    <div className="container mx-auto">
      <SearchBox/>
      <JobsGrid searchParams={searchParams} />
    </div>
  );
}
