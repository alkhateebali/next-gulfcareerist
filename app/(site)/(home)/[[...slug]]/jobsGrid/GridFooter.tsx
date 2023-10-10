"use client";
import { Button } from "@nextui-org/react";
import usePaging from "./usePaging";
interface Props {
    searchParams: {
        keywords: string;
        location: string;
        page: string;
      }
}
const GridFooter = ({searchParams}:Props) => {
  const { currentPage, handlePaging } = usePaging(searchParams);
  return (
    <div className="flex  flex-nowrap items-center justify-center p-10 ">
      {currentPage > 1 && (
        <Button
          onClick={() => handlePaging()}
          className="mx-4"
          size="lg"
          color="primary"
          variant="bordered"
        >
          {"<"} Previous Page
        </Button>
      )}

      <Button
        onClick={() => handlePaging(true)}
        className="mx-4"
        size="lg"
        color="primary"
        variant="bordered"
      >
        Next Page {">"}
      </Button>
    </div>
  );
};

export default GridFooter;
