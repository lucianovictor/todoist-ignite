import styles from "./styles.module.scss";

import clipboard from "../../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.content}>
      <img src={clipboard} alt="svg clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus items a fazer</span>
    </div>
  );
}
