import JobsGrid from "./jobsGrid/JobsGrid";
import useJobs from "./jobsGrid/useJobs";
import SearchBox from "../../components/searchBox/SearchBox";
import dynamic from "next/dynamic";
import Container from "../../components/Container";

const GridFooter = dynamic(() => import("./jobsGrid/GridFooter"));
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
    page: string;
  };
}) {
  const response = await useJobs(searchParams);
  const jobs = response.jobs;

  return (
    <Container>
      <SearchBox />

      <div className="conatainer py-4 lg:px-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-1  gap-4">
          <div className=""></div>
          <div className="col-span-1 lg:px-14">
            <JobsGrid jobs={jobs} />
            {jobs && <GridFooter searchParams={searchParams} />}
          </div>
        </div>
        </div>
        </Container>

  );
}
