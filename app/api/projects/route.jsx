import { NextResponse } from "next/server";
import Project from "../../models/Project";
import connectdb from "../../utils/connectdb";

export async function GET() {
  await connectdb();
  let projects = await Project.find();
  return NextResponse.json({ projects });
}

export async function POST(request) {
  await connectdb();

  try {
    const body = await request.json();
    const { title, description, technologies, content, imageurl } = body;

    if (!title || !description || !technologies || !imageurl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      title,
      description,
      technologies,
      content,
      imageurl,
    });

    await newProject.save();

    return NextResponse.json(
      { message: "Project created", project: newProject },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(req) {
  try {
    await connectdb();

    const body = await req.json();
    const { id, title, description, technologies, content } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Missing project ID" },
        { status: 400 }
      );
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        ...(title && { title }),
        ...(description && { description }),
        ...(technologies && { technologies }),
        ...(content && { content }),
      },
      { new: true } // return updated doc
    );

    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Project updated",
      project: updatedProject,
    });
  } catch (error) {
    console.error("PUT /api/projects error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
