import { useRouter } from "next/navigation";

const usePaging = (searchParams: {
    keywords: string;
    location: string;
    page: string;
  }) => {
  const router = useRouter();
  let currentPage: number = parseInt(searchParams.page);

  const handlePaging = (next?: boolean) => {
    const currentURL = new URL(window.location.href);
    next ? (currentPage += 1) : (currentPage -= 1);
    currentURL.searchParams.set("page", currentPage.toString());
    router.push(currentURL.toString());
  };
  return { currentPage, handlePaging };
};

export default usePaging;
