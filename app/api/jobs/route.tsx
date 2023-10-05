import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const location = request.nextUrl.searchParams.get("location");
    const keywords = request.nextUrl.searchParams.get("keywords");
    const page = request.nextUrl.searchParams.get("page");

    const response = await axios.get(`http://0.0.0.0:8080/api/jobs`, {
      params: { keywords: keywords, location: location, page: page },
    });
    
    return NextResponse.json(response.data.jobs);
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return NextResponse.json(error);
  }
}
