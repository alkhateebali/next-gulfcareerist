import { Job } from "@/app/types/jobs/Job";
import { Search } from "@/app/types/jobs/Job";
const JobsGrid = async () => {
  const search: Search = { location: "Dubai", keywords: "Developer", page: 1 };
  const queryString = `location=${search.location}&keywords=${search.keywords}&page=${search.page}`;
  const url = `http://localhost:3000/api/jobs?${queryString}`;
  const response = await fetch(url);
  const jobs: Job[] = await response.json();

  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.url}>{job.title}</li>
      ))}
    </ul>
  );
};

export default JobsGrid;
