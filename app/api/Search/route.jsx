import { NextResponse } from "next/dist/server/web/spec-extension/response";
import connectdb from "../../utils/connectdb";

export async function GET(req) {
  await connectdb();

  try {
    return NextResponse.json({ message: "Welcome to search" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectdb();

  try {
    return NextResponse.json({ message: "Welcome to search" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
