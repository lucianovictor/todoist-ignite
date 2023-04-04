import styles from "./styles.module.scss";

interface TaskDoneProps {
  totalTasks: number;
  totalTasksDone: number;
}

export function TaskDone({ totalTasks, totalTasksDone }: TaskDoneProps) {
  return (
    <div className={styles.container}>
    <div className={styles.created}>
      <span>Tarefas criadas</span>
      <div className={styles.counter}>{totalTasks}</div>
    </div>
    <div className={styles.done}>
      <span>Concluídas</span>
      <div className={styles.counter}>
        {totalTasksDone} de {totalTasks}
      </div>
    </div>
  </div>
  )
}
