import styles from '../../App.module.css';
import { useState } from 'react';
import BoxCounter from './BoxCounter';

function SecondTask() {
  const [box, setBox] = useState([]);

  const handleAdd = () => {
    setBox([...box, box]);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>2 task</h1>
        <div className={styles.containerRowDirection}>
          {box.map((_, i) => {
            return <BoxCounter key={i} />;
          })}
        </div>
        <button onClick={handleAdd}>Pridėti</button>
      </div>
    </>
  );
}

export default SecondTask;
