import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface Props {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await axios.get(`http://0.0.0.0:8080/api/jobs/${params.id}/`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return NextResponse.json(error);
  }
}
