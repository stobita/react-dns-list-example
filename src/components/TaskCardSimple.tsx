import React from "react";
import { Task } from "../App";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";

interface Props {
  task: Task;
}

export const TaskCardSimple = (props: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id: props.task.id, type: ItemTypes.TASK },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <>
      {!isDragging && (
        <div ref={drag} className="task-card">
          {props.task.name}
        </div>
      )}
    </>
  );
};
