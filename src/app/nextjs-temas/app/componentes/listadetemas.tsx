"use client";
import React from "react";
import { useTemas } from "../context/TemasContext";
"use client";
import React from "react";
import { useTemas } from "../context/TemasContext";

export default function ListaTemas({ soloInteresantes = false }: { soloInteresantes?: boolean }) {
  const { temas, toggleInteresante } = useTemas();
  const lista = soloInteresantes ? temas.filter((t) => t.interesante) : temas;

  if (lista.length === 0) return <p>No hay temas para mostrar.</p>;

  return (
    <div className="space-y-2">
      {lista.map((tema) => (
        <div
          key={tema.id}
          className="flex justify-between items-center p-2 border rounded"
        >
          <span>{tema.titulo}</span>
          <button
            onClick={() => toggleInteresante(tema.id)}
            className={`px-3 py-1 rounded text-white ${
              tema.interesante ? "bg-green-600" : "bg-gray-600"
            }`}
          >
            {tema.interesante ? "★ Interesante" : "☆ No Interesante"}
          </button>
        </div>
      ))}
    </div>
  );
}
export default function ListaTemas({ soloInteresantes = false }: { soloInteresantes?: boolean }) {
  const { temas, toggleInteresante } = useTemas();
  const lista = soloInteresantes ? temas.filter((t) => t.interesante) : temas;

  if (lista.length === 0) return <p>No hay temas para mostrar.</p>;

  return (
    <div className="space-y-2">
      {lista.map((tema) => (
        <div
          key={tema.id}
          className="flex justify-between items-center p-2 border rounded"
        >
          <span>{tema.titulo}</span>
          <button
            onClick={() => toggleInteresante(tema.id)}
            className={`px-3 py-1 rounded text-white ${
              tema.interesante ? "bg-green-600" : "bg-gray-600"
            }`}
          >
            {tema.interesante ? "★ Interesante" : "☆ No Interesante"}
          </button>
        </div>
      ))}
    </div>
  );
}
