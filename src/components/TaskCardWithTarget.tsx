import React, { useEffect, useContext } from "react";
import { Task } from "../App";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";
import { TaskListContext } from "./TaskListWithTarget";

interface Props {
  task: Task;
}

export const TaskCardWithTarget = (props: Props) => {
  const { setIsDragging, setDraggingId } = useContext(TaskListContext);
  const [{ isDragging }, drag] = useDrag({
    item: { id: props.task.id, type: ItemTypes.TASK },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  useEffect(() => {
    setIsDragging(isDragging);
    setDraggingId(props.task.id);
  }, [isDragging]);
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
