import { ReactNode } from "react";
import Aside from "./Aside";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className="conatainer py-4 lg:px-14">
      <div className="grid   grid-col-1  lg:grid-cols-4 ">
        <div className="col-span-3">{children}</div>
        <div className="col-span-1">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Container;
