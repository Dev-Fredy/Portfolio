import connectDb from "../../../utils/connectdb";
import Project from "../../../models/Project";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectDb();

  try {
    const { slug } = params;

    const project = await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project found!", project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
