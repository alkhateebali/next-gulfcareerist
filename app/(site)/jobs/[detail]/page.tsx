import { SetJobSlug } from "@/types/jobs/Job";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import DisplayAd from "../../components/Ads/DisplayAd";

interface Props {
  searchParams: {
    id: string;
    page: string;
  };
}
const JobDetail = ({
  searchParams,
}: {
  searchParams: { id: string; page: string };
}) => {
  const careerjetUrl = SetJobSlug(searchParams.id, searchParams.page);
  return (
    <div className="h-screen w-full relative">
      <div className="relative  bottom-0 isolate overflow-hidden px-6 py-24 sm:px-24 xl:py-32">
        <h4 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
          You will be redirected shortly ...
        </h4>

        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 dark:text-gray-300 text-gray-700">
          Click to apply on our partner&apos;s website for the job details you seek.
        </p>

        <div className="mx-auto mt-10 flex  justify-center items-center  max-w-md gap-x-4">
          <CountdownTimer url={careerjetUrl} />
        </div>
      </div>
      <DisplayAd/>
    </div>
  );
};

export default JobDetail;
