import Link from "next/link";
import { Job, getId } from "@/types/jobs/Job";
import FromNow from "../../components/FromNow";
import Location from "../../components/searchBox/icons/Location";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  const id = getId(job.url);
  const url = `/job/${id}`;

  return (
    <>
      <div className="w-full bg-base-100 border-b-1 border-default dark:border-warning my-4">
          <h2 className=" text-primary ">
            <Link href={url}>{job.title}</Link>
          </h2>
          <h3 className="prose-md">{job.company}</h3>
          <div className="flex flex-nowrap my-2">
            <Location color="warning" />
            <span className="px-2"> {job.locations}</span>
          </div>
          <div
            className="prose-grey my-2"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <FromNow date={job.date} />

      </div>
    </>
  );
};

export default JobCard;
