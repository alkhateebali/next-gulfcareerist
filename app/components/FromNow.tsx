import moment from "moment";
interface Props {
  date: string;
}
const FromNow = ({ date }: Props) => {
  const specificDate = moment(date);
  return (
    <div className="badge badge-ghost  gap-2">{specificDate.fromNow()}</div>
  );
};

export default FromNow;
