import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Todo from "@/models/Todo";

// GET: Fetch all todos
export async function GET() {
  try {
    await connectDB();

    const todos = await Todo.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        todos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET todos error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch todos",
      },
      { status: 500 }
    );
  }
}

// POST: Create a new todo
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const title = body.title?.trim();

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo title is required",
        },
        { status: 400 }
      );
    }

    if (title.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Title cannot exceed 150 characters",
        },
        { status: 400 }
      );
    }

    const newTodo = await Todo.create({
      title,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Todo created successfully",
        todo: newTodo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST todo error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create todo",
      },
      { status: 500 }
    );
  }
}