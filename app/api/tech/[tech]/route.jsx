import connectdb from "../../../utils/connectdb";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectdb();

  try {
    let body = await req.json();

    let { tech } = body;

    console.log(tech);

    return NextResponse.json({ message: body });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error occurred!" },
      { status: 500 }
    );
  }
}
