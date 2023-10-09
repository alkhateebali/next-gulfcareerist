import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("location");
  const keywords = request.nextUrl.searchParams.get("keywords");
  const page = request.nextUrl.searchParams.get("page");

  const careerjetUrl =
    "http://public.api.careerjet.net/search?locale_code=en_GB";

  const params = {
    location: location,
    keywords: keywords,
    page: page, // Current page number (should be >=1). If set, will override start_num. The maxumum number of page is given by $result->pages
    affid: "f73e09f28605a3dc7417601b6b405b56 ",
    user_ip: "192.168.100.21",
    url: "http://www.example.com/jobsearch?q=python&l=london",
    user_agent:
      "Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0",
    sort: "relevance", // Type of sort. Available values are 'relevance' (default), 'date', and 'salary'.
    start_num: 1, //  Num of first offer returned in entire result space should be >= 1 and <= Number of hits. Default: 1
    pagesize: 10, // Number of offers returned in one call. Default: 20. Max: 99.
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

