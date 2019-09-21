import React, { useState } from "react";
import "./App.css";
import { TaskBox } from "./components/TaskBox";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

export interface Task {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const move = (toId: number, fromId: number) => {
    const toIndex = tasks.findIndex(v => v.id === toId);
    const fromIndex = tasks.findIndex(v => v.id === fromId);
    const toItem = tasks[toIndex];
    const fromItem = tasks[fromIndex];
    const prev = tasks.slice();
    prev[toIndex] = fromItem;
    prev[fromIndex] = toItem;
    setTasks(prev);
    console.log(tasks);
  };
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="task-list">
          {tasks.map(task => (
            <TaskBox key={task.id} task={task} move={move}></TaskBox>
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

export default App;

const initialTasks = [
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
