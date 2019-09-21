import React from "react";
import { Task } from "../App";
import { TaskCard } from "./TaskCard";
import { ItemTypes } from "../constants";
import { useDrop } from "react-dnd";

interface Props {
  task: Task;
  move: (toId: number, fromId: number) => void;
}

export const TaskBox = (props: Props) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: { id: number; type: string }) => {
      props.move(props.task.id, item.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div ref={drop} className="task-bok">
      <TaskCard task={props.task}></TaskCard>
    </div>
  );
};
