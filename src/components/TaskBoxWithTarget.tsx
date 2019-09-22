import React, { useEffect, useState, useContext } from "react";
import { Task } from "../App";
import { useDrop, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { TaskListContext } from "./TaskListWithTarget";
import { TaskCardWithTarget } from "./TaskCardWithTarget";

interface Props {
  task: Task;
  move: (toId: number, fromId: number) => void;
  setDragging?: (v: boolean) => void;
}

export const TaskBoxWithTarget = (props: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: { id: number; type: string }) => {
      props.move(props.task.id, item.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver({ shallow: true })
    })
  });
  useEffect(() => {
    if (isOver) {
      props.move(props.task.id, 0);
    }
  }, [isOver]);
  const { isDragging } = useContext(TaskListContext);
  return (
    <>
      {props.task.id !== 0 ? (
        <div ref={drop} className="task-box">
          <TaskCardWithTarget task={props.task}></TaskCardWithTarget>
        </div>
      ) : isDragging ? (
        <div ref={drop} className="empty">
          move to here
        </div>
      ) : null}
    </>
  );
};
