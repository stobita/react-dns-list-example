import React from "react";
import { Task } from "../App";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";

interface Props {
  task: Task;
}

export const TaskCard = (props: Props) => {
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
