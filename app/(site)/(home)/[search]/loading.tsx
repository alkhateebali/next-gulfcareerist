"use client";
import { Skeleton } from "@nextui-org/react";
import Container from "../../components/Container";
import SearchBoxSkelton from "../../components/searchBox/SearchBoxSkelton";
import JobCardSkelton from "./jobCard/JobCardSkelton";
const Loading = () => {
  return (
    <Container>
      <SearchBoxSkelton />
      <div className="conatainer lg:px-14 ">
        <div className="grid grid-cols-1  lg:grid-cols-1  gap-4">
          <div className=""></div>
          <div className="col-span-1 lg:px-14  h-96">
            {Array(10)
              .fill(1)
              .map((item, index) => (
                <JobCardSkelton key={index} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
