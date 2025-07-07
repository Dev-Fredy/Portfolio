import { NextResponse } from "next/server";
import connectDb from "../../utils/connectdb";
import Social from "../../models/Socials";

export async function GET() {
  await connectDb();

  try {
    let socials = await Social.find();

    if (!socials) {
      return NextResponse.json(
        { message: "Social not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ socials }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDb();

  try {
    let body = await req.json();

    let { social, socialurl } = await body;

    if (!social || socialurl) {
      return NextResponse.json(
        { message: "Missing fields requiered1" },
        { status: 400 }
      );
    }

    let newSocial = await Social.create({
      social,
      socialurl,
    });

    newSocial.save();

    return NextResponse.json(
      { message: "Social saved!", social },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
