"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ListaTemas from "./components/ListaTemas";
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ListaTemas from "./components/ListaTemas";

export default function Page() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Temas de Lectura</h1>
      <ListaTemas />
      <div className="text-center">
        <button
          onClick={() => router.push("/interesantes")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Ver solo interesantes
        </button>
      </div>
    </div>
  );
}
export default function Page() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Temas de Lectura</h1>
      <ListaTemas />
      <div className="text-center">
        <button
          onClick={() => router.push("/interesantes")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Ver solo interesantes
        </button>
      </div>
    </div>
  );
}
