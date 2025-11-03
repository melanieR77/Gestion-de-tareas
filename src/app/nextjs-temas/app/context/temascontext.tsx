"use client";
import React, { createContext, useContext, useState } from "react";
"use client";
import React, { createContext, useContext, useState } from "react";

type Tema = { id: number; titulo: string; interesante: boolean };

type TemasContextType = {
  temas: Tema[];
  toggleInteresante: (id: number) => void;
};

const TemasContext = createContext<TemasContextType | undefined>(undefined);

export const TemasProvider = ({ children }: { children: React.ReactNode }) => {
  const [temas, setTemas] = useState<Tema[]>(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      titulo: `Tema ${i + 1}`,
      interesante: false,
    }))
  );

  const toggleInteresante = (id: number) => {
    setTemas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, interesante: !t.interesante } : t
      )
    );
  };

  return (
    <TemasContext.Provider value={{ temas, toggleInteresante }}>
      {children}
    </TemasContext.Provider>
  );
};

export const useTemas = () => {
  const context = useContext(TemasContext);
  if (!context) throw new Error("useTemas debe usarse dentro de TemasProvider");
  return context;
};
type Tema = { id: number; titulo: string; interesante: boolean };

type TemasContextType = {
  temas: Tema[];
  toggleInteresante: (id: number) => void;
};

const TemasContext = createContext<TemasContextType | undefined>(undefined);

export const TemasProvider = ({ children }: { children: React.ReactNode }) => {
  const [temas, setTemas] = useState<Tema[]>(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      titulo: `Tema ${i + 1}`,
      interesante: false,
    }))
  );

  const toggleInteresante = (id: number) => {
    setTemas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, interesante: !t.interesante } : t
      )
    );
  };

  return (
    <TemasContext.Provider value={{ temas, toggleInteresante }}>
      {children}
    </TemasContext.Provider>
  );
};

export const useTemas = () => {
  const context = useContext(TemasContext);
  if (!context) throw new Error("useTemas debe usarse dentro de TemasProvider");
  return context;
};
