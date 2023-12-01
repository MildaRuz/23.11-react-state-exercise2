import styles from '../../App.module.css';
import { useState } from 'react';

function FirstTask() {
  const [treeĄ, setTreeĄ] = useState([]);
  const [treeB, setTreeB] = useState([]);
  const [treeUo, setTreeUo] = useState([]);

  const handleAdd = (treeName) => {
    if (treeName === 'Ąžuolas') {
      setTreeĄ([...treeĄ, treeName]);
    }
    if (treeName === 'Beržas') {
      setTreeB([...treeB, treeName]);
    }
    if (treeName === 'Uosis') {
      setTreeUo([...treeUo, treeName]);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>1 task</h1>
        <div className={styles.field}>
          <div className={styles.trees}>
            {treeĄ.map((e, index) => {
              return (
                <div key={index} className={e === 'Ąžuolas' ? styles.oneTree : ''}>
                  {e}
                </div>
              );
            })}
          </div>
          <div className={styles.trees}>
            {treeB.map((e, index) => {
              return (
                <div key={index} className={e === 'Beržas' ? styles.oneTree : ''}>
                  {e}
                </div>
              );
            })}
          </div>
          <div className={styles.trees}>
            {treeUo.map((e, index) => {
              return (
                <div key={index} className={e === 'Uosis' ? styles.oneTree : ''}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button onClick={() => handleAdd('Ąžuolas')}>Ąžuolas</button>
          <button onClick={() => handleAdd('Beržas')}>Beržas</button>
          <button onClick={() => handleAdd('Uosis')}>Uosis</button>
        </div>
      </div>
    </>
  );
}

export default FirstTask;
