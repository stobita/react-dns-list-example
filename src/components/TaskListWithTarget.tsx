import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect
} from "react";
import { Task, initialTasks } from "../App";
import { TaskBoxWithTarget } from "./TaskBoxWithTarget";

export const TaskListContext = createContext<TaskListContextProps>({
  isDragging: false,
  setIsDragging: () => {},
  draggingId: 0,
  setDraggingId: () => {}
});

type TaskListContextProps = {
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  draggingId: number;
  setDraggingId: Dispatch<SetStateAction<number>>;
};

export const TaskListWithTarget = () => {
  const [tasks, setTasks] = useState([...initialTasks, { id: 0, name: "" }]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingId, setDraggingId] = useState(0);

  const move = (toId: number, fromId: number) => {
    const toIndex = tasks.findIndex(v => v.id === toId);
    const fromIndex = tasks.findIndex(v => v.id === fromId);
    const fromItem = tasks[fromIndex];
    const prev = tasks.slice();
    prev.splice(fromIndex, 1);
    prev.splice(toIndex, 0, fromItem);
    setTasks(prev);
  };

  useEffect(() => {
    move(draggingId, 0);
  }, [draggingId]);

  return (
    <>
      <TaskListContext.Provider
        value={{ isDragging, setIsDragging, draggingId, setDraggingId }}
      >
        <h2>with target</h2>
        {tasks.map(task => (
          <TaskBoxWithTarget
            key={task.id}
            task={task}
            move={move}
          ></TaskBoxWithTarget>
        ))}
      </TaskListContext.Provider>
    </>
  );
};
