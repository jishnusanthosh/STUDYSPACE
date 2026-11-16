
"use client";

import { useEffect, useState } from "react";

export default function TodoManager() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // READ: Fetch all todos
  async function fetchTodos() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/todos");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch todos");
      }

      setTodos(data.todos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  // CREATE / UPDATE
  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a todo title");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const isEditing = Boolean(editingId);

      const response = await fetch(
        isEditing ? `/api/todos/${editingId}` : "/api/todos",
        {
          method: isEditing ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setTitle("");
      setEditingId(null);

      await fetchTodos();
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  }

  // Select todo for editing
  function handleEdit(todo) {
    setTitle(todo.title);
    setEditingId(todo._id);
    setError("");
  }

  // UPDATE: Toggle completed status
  async function handleToggle(todo) {
    try {
      setError("");

      const response = await fetch(`/api/todos/${todo._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update todo");
      }

      await fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  }

  // DELETE
  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete todo");
      }

      if (editingId === id) {
        setEditingId(null);
        setTitle("");
      }

      await fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  }

  function handleCancel() {
    setTitle("");
    setEditingId(null);
    setError("");
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">

        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Todo Manager
        </h1>

        <p className="mb-8 text-slate-500">
          Manage your daily tasks with Next.js and MongoDB.
        </p>

        {/* CREATE / UPDATE FORM */}
        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter your todo..."
            maxLength={150}
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {saving
              ? "Saving..."
              : editingId
                ? "Update Todo"
                : "Add Todo"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg bg-slate-200 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-300"
            >
              Cancel
            </button>
          )}
        </form>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {/* TODO LIST */}
        <div className="space-y-3">
          {loading ? (
            <p className="py-8 text-center text-slate-500">
              Loading todos...
            </p>
          ) : todos.length === 0 ? (
            <p className="py-8 text-center text-slate-500">
              No todos found. Create your first task!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo._id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo)}
                    aria-label={`Mark ${todo.title} as ${todo.completed ? "incomplete" : "complete"}`}
                    className="h-5 w-5 shrink-0 accent-blue-600"
                  />

                  <span
                    className={`break-words ${
                      todo.completed
                        ? "text-slate-400 line-through"
                        : "text-slate-800"
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(todo)}
                    className="rounded-md bg-amber-100 px-3 py-2 text-sm font-medium text-amber-700 hover:bg-amber-200"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(todo._id)}
                    className="rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500">
          Total tasks: {todos.length}
          {" | "}
          Completed: {todos.filter((todo) => todo.completed).length}
        </div>

      </div>
    </main>
  );
}
