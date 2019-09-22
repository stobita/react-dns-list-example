import React, { useState } from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { TaskListWithTarget } from "./components/TaskListWithTarget";
import { TaskListSimple } from "./components/TaskListSimple";

const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="lists">
          <div className="task-list">
            <TaskListSimple></TaskListSimple>
          </div>
          <div className="task-list">
            <TaskListWithTarget></TaskListWithTarget>
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default App;

export interface Task {
  id: number;
  name: string;
}

export const initialTasks = [
  {
    id: 1,
    name: "task1"
  },
  {
    id: 2,
    name: "task2"
  },
  {
    id: 3,
    name: "task3"
  },
  {
    id: 4,
    name: "task4"
  },
  {
    id: 5,
    name: "task5"
  }
];
