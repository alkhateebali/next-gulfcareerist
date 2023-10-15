import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location");
  const keywords = request.nextUrl.searchParams.get("keywords");
  const page = request.nextUrl.searchParams.get("page");

  const careerjetUrl =process.env.CARRERJET_API_URL ? process.env.CARRERJET_API_URL:""

  const params = {
    location: location,
    keywords: keywords,
    page: page,
    affid: process.env.AFF_ID,
    user_ip:process.env.USER_IP,
    url: process.env.SEARCH_URL,
    user_agent:process.env.USER_AGENT ,
    sort: "date", // Type of sort. Available values are 'relevance' (default), 'date', and 'salary'.
    start_num: 1, //  Num of first offer returned in entire result space should be >= 1 and <= Number of hits. Default: 1
    pagesize: 20, // Number of offers returned in one call. Default: 20. Max: 99.
    // contracttype: '', // Character code for contract types:<br>
    // *    'p'    - permanent job<br>
    // *    'c'    - contract<br>
    // *    't'    - temporary<br>
    // *    'i'    - training<br>
    // *    'v'    - voluntary<br>
    // *    Default: none (all contract types)
    // contractperiod: '', // Character code for contract contract periods:
    // *    'f'     - Full time<br>
    // *    'p'     - Part time<br>
    // *    Default: none (all contract periods)
  };
  const headers = {};
  try {
    const response = await axios.get(careerjetUrl, {
      params: params,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return NextResponse.json(error);
  }
}

