import React, { useContext } from "react";import React, { useContext } from "react";

import { TasksContext } from "../Context/TaskContext";import { TasksContext } from "../contexts/TasksContext";

import TaskRow from "./TaskRow";import TaskRow from "./TaskRow";



export default function TaskTable() {export default function TaskTable() {

  const { tasks } = useContext(TasksContext);  const { tasks } = useContext(TasksContext);



  return (  return (

    <table>    <table>

      <thead>      <thead>

        <tr>        <tr>

          <th>ID</th>          <th>ID</th>

          <th>Título</th>          <th>Título</th>

          <th>Descripción</th>          <th>Descripción</th>

          <th>Estado</th>          <th>Estado</th>

          <th>Acciones</th>          <th>Acciones</th>

        </tr>        </tr>

      </thead>      </thead>

      <tbody>      <tbody>

        {tasks.length === 0 ? (        {tasks.length === 0 ? (

          <tr>          <tr>

            <td colSpan="5" style={{ textAlign: "center" }}>            <td colSpan="5" style={{ textAlign: "center" }}>

              No hay tareas registradas.              No hay tareas registradas.

            </td>            </td>

          </tr>          </tr>

        ) : (        ) : (

          tasks.map((task) => <TaskRow key={task.id} task={task} />)          tasks.map((task) => <TaskRow key={task.id} task={task} />)

        )}        )}

      </tbody>      </tbody>

    </table>    </table>

  );  );

}}
