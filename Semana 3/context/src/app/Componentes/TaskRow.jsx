import React, { useContext } from "react";import React, { useContext } from "react";

import { TasksContext } from "../Context/TaskContext";import { TasksContext } from "../contexts/TasksContext";



export default function TaskRow({ task }) {export default function TaskRow({ task }) {

  const { updateStatus, deleteTask } = useContext(TasksContext);  const { updateStatus, deleteTask } = useContext(TasksContext);



  return (  return (

    <tr>    <tr>

      <td>{task.id}</td>      <td>{task.id}</td>

      <td>{task.titulo}</td>      <td>{task.titulo}</td>

      <td>{task.descripcion}</td>      <td>{task.descripcion}</td>

      <td>      <td>

        <select        <select

          value={task.estado}          value={task.estado}

          onChange={(e) => updateStatus(task.id, e.target.value)}          onChange={(e) => updateStatus(task.id, e.target.value)}

        >        >

          <option>Pendiente</option>          <option>Pendiente</option>

          <option>En Proceso</option>          <option>En Proceso</option>

          <option>Completada</option>          <option>Completada</option>

        </select>        </select>

      </td>      </td>

      <td>      <td>

        <button onClick={() => deleteTask(task.id)}>🗑️ Eliminar</button>        <button onClick={() => deleteTask(task.id)}>🗑️ Eliminar</button>

      </td>      </td>

    </tr>    </tr>

  );  );

}}
