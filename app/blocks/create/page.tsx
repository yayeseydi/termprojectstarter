"use client";

import Link from "next/link";

export default function CreateBlock() {
  return (
    // 🔹 Added a styled container and consistent spacing
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* 🔹 Styled back link */}
        <Link href="/" className="text-blue-600 hover:underline">
          ← Go back Home
        </Link>

        {/* 🔹 Added title for the page */}
        <h1 className="text-2xl font-semibold text-gray-800 mt-4 mb-6">
          Create Block
        </h1>

        {/* 🔹 Wrapped inputs in labeled form groups and added Tailwind styling */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Block Title"
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Code
            </label>
            <textarea
              placeholder="your code goes here..."
              className="w-full h-40 rounded-lg border border-gray-300 p-2 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 🔹 Added a styled button and temporary alert */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert("Create not wired yet");
            }}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </div>
    </main>
  );
}
