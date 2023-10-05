import JobsGrid from "./components/jobsGrid/JobsGrid";
import useJobs from "./components/jobsGrid/useJobs";
import SearchBox from "./components/searchBox/SearchBox";

interface Props {
  searchParams: {
    keywords: string;
    location: string;
    page: number;
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    keywords: string;
    location: string;
    page: number;
  };
}) {
  const jobs = await useJobs(searchParams);

  return (
    <>
      <div className="conatainer py-4 lg:px-14">
        <SearchBox />
      </div>
      <div className="conatainer py-4 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-4  gap-4">
          <div className=""></div>
          <div className="col-span-3 ">
            <JobsGrid jobs={jobs} />
          </div>
        </div>
      </div>
    </>
  );
}
