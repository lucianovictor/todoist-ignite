import styles from "./styles.module.scss";
import { Check, Trash } from "phosphor-react";

interface TaskProps {
  title: string;
  IsCompleted: boolean;
  onCheck: () => void;
  onDelete: () => void;
}

export function Task({ title, IsCompleted, onCheck, onDelete }: TaskProps) {
  function handleCheck() {
    onCheck();
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${IsCompleted && styles.doneButton}`}
        onClick={handleCheck}
      >
        {IsCompleted && <Check size={10} weight="bold" />}
      </button>

      <span className={`${styles.title} ${IsCompleted && styles.titleDone}`}>
        {title}
      </span>

      <button className={styles.trashButton} onClick={handleDelete}>
        <Trash size={16} />
      </button>
    </div>
  );
}
