import Link from "next/link";
import { Job, getId } from "@/app/types/jobs/Job";
import FromNow from "../FromNow";
import Location from "../searchBox/icons/Location";


interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  const id = getId(job.url);
  const url = `/job/${id}`;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-md hover:bg-slate-50 my-4">
        <div className="card-body">
          <h2 className="card-title text-sky-600 prose-2xl">
            <Link href={url}>{job.title}</Link>
          </h2>
          <h3 className="prose-md">{job.company}</h3>
          <div className="join join-horizontal">
            <Location color="#fa9f00" />
            <span className="px-2"> {job.locations}</span>
          </div>
          <div className="prose-grey"  dangerouslySetInnerHTML={{ __html: job.description }} />
          <FromNow date={job.date} />
        </div>
      </div>
    </>
  );
};

export default JobCard;
