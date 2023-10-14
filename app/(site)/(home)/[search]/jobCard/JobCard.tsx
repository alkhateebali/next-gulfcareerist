import Link from "next/link";
import { Job, getId } from "@/types/jobs/Job";
import { GetJobSlug } from "@/types/jobs/Job";
import { BadgeFromNow } from "@/app/(site)/components/FromNow";
import { LocationIcon } from "@/app/(site)/components/icons/AppIcons";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  // const id = getId(job.url);
  const { id, page } = GetJobSlug(job.url);
  const search = new URLSearchParams();
  search.append("id", id);
  search.append("page", page);
  const url = `/jobs/detail?${search}`;

  return (
    <>
      <Link href={url} >
        <div className="w-full bg-base-100 border-b-1 border-default dark:border-default hover:cursor-pointer my-4">
          <h2 className=" text-primary ">{job.title}</h2>
          <h3 className="prose-md">{job.company}</h3>
          <div className="flex flex-nowrap my-2">
            <LocationIcon />
            <span className="px-2"> {job.locations}</span>
          </div>
          <div
            className="prose-grey my-2"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <BadgeFromNow date={job.date} />
        </div>
      </Link>
    </>
  );
};

export default JobCard;
