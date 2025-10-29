import React from "react";import React from "react";

import TaskForm from "./Componentes/TaskForm";import TaskForm from "./components/TaskForm";

import TaskTable from "./Componentes/TaskTable";import TaskTable from "./components/TaskTable";



export default function App() {export default function App() {

  return (  return (

    <div className="container">    <div className="container">

      <h1>📝 Gestor de Tareas - Semana 3</h1>      <h1>📝 Gestor de Tareas - Semana 3</h1>

      <TaskForm />      <TaskForm />

      <TaskTable />      <TaskTable />

    </div>    </div>

  );  );

}}
