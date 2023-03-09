import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.scss";

export function TaskList() {
  function handleCreateTaskTitle() {}

  function handleCreateNewTask() {}

  return (
    <main className={styles.container}>
      <div className={styles.TaskContainer}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleCreateTaskTitle}
        />

        <button type="submit" onClick={handleCreateNewTask}>
          <strong>Criar</strong> <PlusCircle fontSize={20} />
        </button>
      </div>
    </main>
  );
}
