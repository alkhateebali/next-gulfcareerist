import { Job } from "@/app/types/jobs/Job";
import { Search } from "@/app/types/jobs/Job";
interface Props {
  searchParams: Search;
}
const JobsGrid = async ({
  searchParams,
}: {
  searchParams: { keywords: string; location: string; page: number };
}) => {
  let jobs: Job[] = [];

  if ( searchParams?.keywords?.length > 0) {
    const queryString = `location=${searchParams.location}&keywords=${searchParams.keywords}&page=${searchParams.page}`;
    const url = `http://localhost:3000/api/jobs?${queryString}`;
    console.log(url);

    const response = await fetch(url);
    jobs = await response.json();
  }

  return (
    <ul>
      {jobs.length > 0 && jobs.map((job) => <li key={job.url}>{job.title}</li>)}
    </ul>
  );
};

export default JobsGrid;
