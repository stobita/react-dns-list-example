import React from "react";
import { Task } from "../App";
import { ItemTypes } from "../constants";
import { useDrop } from "react-dnd";
import { TaskCardSimple } from "./TaskCardSimple";

interface Props {
  task: Task;
  move: (toId: number, fromId: number) => void;
}

export const TaskBoxSimple = (props: Props) => {
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
    <div ref={drop} className="task-box">
      <TaskCardSimple task={props.task}></TaskCardSimple>
    </div>
  );
};
