import { NextResponse } from "next/server";
import connectDb from "../../../utils/connectdb";
import Social from "../../../models/Socials";

export async function PUT(_, { params }) {
  await connectDb();

  try {
    let { social } = params;

    if (!social) {
      return NextResponse.json(
        { message: "No social url provided" },
        { status: 404 }
      );
    }

    let newSocial = await Social.findOneAndUpdate((social) => {
      social, { ...(social && { social }) };
    });

    return NextResponse.json(
      { message: "Social Updated", newSocial },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
