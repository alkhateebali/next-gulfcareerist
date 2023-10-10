import moment from "moment";
interface Props {
  date: string;
}
const FromNow = ({ date }: Props) => {
  const specificDate = moment(date);
  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-gray-400   dark:bg-primary   rounded-full  my-4">{specificDate.fromNow()}</span>

  );
};

export default FromNow;
