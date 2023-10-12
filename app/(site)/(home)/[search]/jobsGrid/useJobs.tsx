
const useJobs = async (searchParams: {
  keywords: string;
  location: string;
  page: string;
}) => {
 const API_URL=process.env.API_URL
 const search= new URLSearchParams;
 search.append('location',searchParams.location)
 search.append('keywords',searchParams.keywords)
 search.append('page',searchParams.page)
  const url = API_URL+ `/jobs?${search}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default useJobs;
