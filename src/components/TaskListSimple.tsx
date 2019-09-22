import React, { useState } from "react";
import { Task, initialTasks } from "../App";
import { TaskBoxSimple } from "./TaskBoxSimple";

export const TaskListSimple = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const move = (toId: number, fromId: number) => {
    const toIndex = tasks.findIndex(v => v.id === toId);
    const fromIndex = tasks.findIndex(v => v.id === fromId);
    const fromItem = tasks[fromIndex];
    const prev = tasks.slice();
    prev.splice(fromIndex, 1);
    prev.splice(toIndex, 0, fromItem);
    setTasks(prev);
  };
  return (
    <div className="task-list">
      <h2>simple</h2>
      {tasks.map(task => (
        <TaskBoxSimple key={task.id} task={task} move={move}></TaskBoxSimple>
      ))}
    </div>
  );
};
