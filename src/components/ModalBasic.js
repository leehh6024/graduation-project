import styles from "./ModalBasic.module.css";

function ModalBasic(props) {
  return (
    <div className={styles.container}>
      <button className={styles.close}>X</button>
      <p>{props.title}</p>
      <p>{props.body}</p>
      <p>{props.class}</p>
    </div>
  );
}
export default ModalBasic;
