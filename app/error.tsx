"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <p className="mt-2">{error.message || "An unexpected error has occurred."}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
