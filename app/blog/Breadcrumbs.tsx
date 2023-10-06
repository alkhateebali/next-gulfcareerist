import Link from "next/link";
interface Props {
  currentRoute: string;
}
const Breadcrumbs = ({ currentRoute }: Props) => {
  return (
    <div className="conatainer py-4 lg:px-14">
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <b>{currentRoute}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
