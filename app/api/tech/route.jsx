import { NextResponse } from "next/server";
import Tech from "../../models/Technology";
import connectDb from "../../utils/connectdb";

export async function GET(request) {
  await connectDb();

  try {
    let tech = await Tech.find();
    return NextResponse.json({ tech });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDb();

  try {
    let body = await req.json();

    let { name, description, content, imageurl } = body;

    if (!name || !description) {
      return NextResponse.json(
        { message: "Missing required fields!" },
        { status: 400 }
      );
    }

    let newTech = await Tech.create({
      name,
      description,
      content,
      imageurl,
    });

    await newTech.save();

    return NextResponse.json(
      { message: "Tech saved!", newTech },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
