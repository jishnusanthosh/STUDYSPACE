import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";
import Todo from "@/models/Todo";

// GET: Fetch one todo
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid todo ID",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const todo = await Todo.findById(id);

    if (!todo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      todo,
    });
  } catch (error) {
    console.error("GET single todo error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch todo",
      },
      { status: 500 }
    );
  }
}

// PATCH: Update a todo
export async function PATCH(request, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid todo ID",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    if (
      body.title === undefined &&
      body.completed === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Provide a field to update",
        },
        { status: 400 }
      );
    }

    const updates = {};

    if (body.title !== undefined) {
      if (
        typeof body.title !== "string" ||
        !body.title.trim() ||
        body.title.trim().length > 150
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Enter a valid title (1–150 characters)",
          },
          { status: 400 }
        );
      }

      updates.title = body.title.trim();
    }

    if (body.completed !== undefined) {
      if (typeof body.completed !== "boolean") {
        return NextResponse.json(
          {
            success: false,
            message: "Completed must be a boolean",
          },
          { status: 400 }
        );
      }

      updates.completed = body.completed;
    }

    await connectDB();

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTodo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    console.error("PATCH todo error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update todo",
      },
      { status: 500 }
    );
  }
}

// DELETE: Delete a todo
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid todo ID",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error("DELETE todo error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete todo",
      },
      { status: 500 }
    );
  }
}