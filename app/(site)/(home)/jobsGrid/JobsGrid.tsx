import { Job } from "@/types/jobs/Job";
import JobCard from "../jobCard/JobCard";

interface Props {
  jobs: Job[];
}
const JobsGrid = ({ jobs }: Props) => {
  return <>{jobs && jobs.map((job) => <JobCard key={job.url} job={job} />)}

  </>;
};

export default JobsGrid;
