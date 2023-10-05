import JobsGrid from "./components/jobsGrid/JobsGrid";
import SearchBox from "./components/searchBox/SearchBox";
import { Search } from "./types/jobs/Job";

interface Props {
  searchParams: {
    keywords: string;
    location: string;
    page: number;
  };
}

export default function Home({
  searchParams,
}: {
  searchParams: {
    keywords: string;
    location: string;
    page: number;
  };
}) {
  return (
    <>
      <div className="conatainer py-4 lg:px-14">
        <SearchBox />
      </div>
      <div className="conatainer py-4 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-4  gap-4">
          <div className=""></div>
          <div className="col-span-3 ">
            <JobsGrid searchParams={searchParams} />
          </div>
        </div>
      </div>
    </>
  );
}
