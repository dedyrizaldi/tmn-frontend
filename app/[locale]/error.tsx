"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Terjadi Kesalahan</h1>

      <p className="mt-4 text-gray-500">Mohon coba beberapa saat lagi.</p>

      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Coba Lagi
      </button>
    </main>
  );
}
