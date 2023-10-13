"use client";
import { Skeleton } from "@nextui-org/react";
import Container from "../../components/Container";
import SearchBoxSkelton from "../../components/searchBox/SearchBoxSkelton";
import JobCardSkelton from "./jobCard/JobCardSkelton";
const Loading = () => {
  return (
    <Container>
      <SearchBoxSkelton/>
      <div className="conatainer py-4 lg:px-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-1  gap-4">
          <div className=""></div>
          <div className="col-span-1 lg:px-14">
             <JobCardSkelton/>
          </div>
        </div>
        </div>
    </Container>
  );
};

export default Loading;
