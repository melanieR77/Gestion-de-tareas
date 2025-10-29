import React, { createContext, useState } from "react";import React, { createContext, useState } from "react";



export const TasksContext = createContext();export const TasksContext = createContext();



export const TasksProvider = ({ children }) => {export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);  const [tasks, setTasks] = useState([]);



  const addTask = (titulo, descripcion) => {  const addTask = (titulo, descripcion) => {

    const newTask = {    const newTask = {

      id: Date.now(),      id: Date.now(),

      titulo,      titulo,

      descripcion,      descripcion,

      estado: "Pendiente"      estado: "Pendiente"

    };    };

    setTasks([...tasks, newTask]);    setTasks([...tasks, newTask]);

  };  };



  const updateStatus = (id, newStatus) => {  const updateStatus = (id, newStatus) => {

    setTasks(tasks.map(t => (t.id === id ? { ...t, estado: newStatus } : t)));    setTasks(tasks.map(t => (t.id === id ? { ...t, estado: newStatus } : t)));

  };  };



  const deleteTask = (id) => {  const deleteTask = (id) => {

    setTasks(tasks.filter(t => t.id !== id));    setTasks(tasks.filter(t => t.id !== id));

  };  };



  return (  return (

    <TasksContext.Provider value={{ tasks, addTask, updateStatus, deleteTask }}>    <TasksContext.Provider value={{ tasks, addTask, updateStatus, deleteTask }}>

      {children}      {children}

    </TasksContext.Provider>    </TasksContext.Provider>

  );  );

};};
