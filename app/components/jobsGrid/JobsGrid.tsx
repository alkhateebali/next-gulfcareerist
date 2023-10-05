import { Job } from "@/app/types/jobs/Job";
import JobCard from "../jobCard/JobCard";
interface Props {
  jobs: Job[];
}
const JobsGrid = ({ jobs }: Props) => {
  return <ul>{jobs.length > 0 && jobs.map((job) => <JobCard job={job} />)}</ul>;
};

export default JobsGrid;
