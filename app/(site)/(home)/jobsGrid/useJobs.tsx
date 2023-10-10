
const useJobs = async (searchParams: {
  keywords: string;
  location: string;
  page: string;
}) => {
  const queryString = `location=${searchParams.location}&keywords=${searchParams.keywords}&page=${searchParams.page}`;
  const url = `http://localhost:3000/api/jobs?${queryString}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default useJobs;
