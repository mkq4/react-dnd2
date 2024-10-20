import cl from "./CompletedTasks.module.css";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "../Task/Task";
import { closestCenter, DndContext } from "@dnd-kit/core";
const CompletedTasks = ({ tasks, setTasks, remove, changeList }) => {

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setTasks((tasks) => {
      const oldId = tasks.findIndex((task) => task.id === active.id);
      const newId = tasks.findIndex((task) => task.id === over.id);

      return arrayMove(tasks, oldId, newId);
    });
  };
  
  return (
    <div className={cl.completedTasks}>
      <DndContext onDragEnd={onDragEnd} collisionDetection={closestCenter}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => {
            return (
              <Task
                title={task.title}
                id={task.id}
                key={task.id}
                remove={remove}
                checked={true}
                changeList={changeList}
              />
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default CompletedTasks;
