import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Search } from "@/app/types/jobs/Job";

interface Props {
  searchParams:  {
  keywords: string;
  location: string;
  page: number;
}
}
export async function GET(
  request: NextRequest,
  { searchParams }: {  searchParams:  {
    keywords: string;
    location: string;
    page: number;
  }}
) {
  try {
    const response = await axios.get(`http://0.0.0.0:8080/api/jobs`, {
      params: searchParams,
    });
    return NextResponse.json(response.data.jobs);
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return NextResponse.json(error);
  }
}

// import fetchJobs from "./careerjet/careerJetAPIClient";
// import axios from "axios";
// const API_URL = "http://public.api.careerjet.net";
// const searchParams = {
//   locale_code: "en_GB",
//   affid: "f73e09f28605a3dc7417601b6b405b56",
//   user_ip: "192.168.100.21",
//   url: "http://localhost:3000/api/jobs",
//   keywords: "developer",
//   location: "New York",
//   page: 1,
// };

// const apiClient = axios.create({
//   baseURL: API_URL,
//   params: searchParams,
//   headers: {
//     user_agent:
//       "Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0",
//     referer: searchParams.url,
//   },
// });
