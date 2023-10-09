"use client";
import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const GridFooter = () => {
  const searchParams = useSearchParams();

  let page = searchParams.get("page");
  let currentPage = !page ? 1 : parseInt(page);

  const router = useRouter();

  const handlePaging = (next?: boolean) => {
    const currentURL = new URL(window.location.href);
    next ? (currentPage += 1) : (currentPage -= 1);
    currentURL.searchParams.set("page", currentPage.toString());
    router.push(currentURL.toString());
  };

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
