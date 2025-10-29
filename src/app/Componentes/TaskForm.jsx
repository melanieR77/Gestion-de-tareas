import React, { useState, useContext } from "react";import React, { useState, useContext } from "react";

import { TasksContext } from "../Context/TaskContext";import { TasksContext } from "../contexts/TasksContext";



export default function TaskForm() {export default function TaskForm() {

  const { addTask } = useContext(TasksContext);  const { addTask } = useContext(TasksContext);

  const [titulo, setTitulo] = useState("");  const [titulo, setTitulo] = useState("");

  const [descripcion, setDescripcion] = useState("");  const [descripcion, setDescripcion] = useState("");



  const handleSubmit = (e) => {  const handleSubmit = (e) => {

    e.preventDefault();    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {    if (!titulo.trim() || !descripcion.trim()) {

      alert("Por favor, completa todos los campos.");      alert("Por favor, completa todos los campos.");

      return;      return;

    }    }

    addTask(titulo, descripcion);    addTask(titulo, descripcion);

    setTitulo("");    setTitulo("");

    setDescripcion("");    setDescripcion("");

  };  };



  return (  return (

    <form onSubmit={handleSubmit} className="form">    <form onSubmit={handleSubmit} className="form">

      <input      <input

        type="text"        type="text"

        placeholder="Título"        placeholder="Título"

        value={titulo}        value={titulo}

        onChange={(e) => setTitulo(e.target.value)}        onChange={(e) => setTitulo(e.target.value)}

      />      />

      <input      <input

        type="text"        type="text"

        placeholder="Descripción"        placeholder="Descripción"

        value={descripcion}        value={descripcion}

        onChange={(e) => setDescripcion(e.target.value)}        onChange={(e) => setDescripcion(e.target.value)}

      />      />

      <button type="submit">Agregar</button>      <button type="submit">Agregar</button>

    </form>    </form>

  );  );

}}
