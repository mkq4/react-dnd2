import { useSortable } from "@dnd-kit/sortable";
import cl from "./Task.module.css";
import { CSS } from "@dnd-kit/utilities";
const Task = ({ id, title, remove, changeList, checked }) => {

  const { transform, transition, listeners, setNodeRef, attributes } =
    useSortable({ id: id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={cl.task}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <input 
        type="checkbox" 
        onPointerDown={(e) => e.stopPropagation()} 
        onChange={() => changeList({id, title})}
        checked={checked}
      />
      <p>{title}</p>
      <div
        style={{cursor: "pointer"}}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => remove({id, title})}
        >x
      </div>
    </div>
  );
};

export default Task;
