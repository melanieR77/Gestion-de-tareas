import React from "react";import React from "react";

import ReactDOM from "react-dom/client";import ReactDOM from "react-dom/client";

import App from "./App";import App from "./App";

import { TasksProvider } from "./Context/TaskContext";import { TasksProvider } from "./contexts/TasksContext";

import "./style.css";import "./styles.css";



ReactDOM.createRoot(document.getElementById("root")).render(ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>  <React.StrictMode>

    <TasksProvider>    <TasksProvider>

      <App />      <App />

    </TasksProvider>    </TasksProvider>

  </React.StrictMode>  </React.StrictMode>

););
