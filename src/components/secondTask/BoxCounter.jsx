import { useState } from 'react';
import styles from '../../App.module.css';

function BoxCounter() {
  const [addNum, setAddNum] = useState(0);

  const addition = () => {
    setAddNum(addNum + 1);
    return addNum;
  };

  return (
    <div className={styles.box}>
      {addNum}
      <button onClick={() => addition()}>+</button>
    </div>
  );
}

export default BoxCounter;
