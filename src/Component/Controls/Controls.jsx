import React from 'react';

import styles from './Controls.module.css';

const Controls = ({onIncrement, pageNumber, max}) => {
    const min = 1;
    return (
        <section className={styles.controls}>
            <button 
              type="button" name="decrement" onClick={onIncrement} 
              className={styles.button} 
              disabled={(pageNumber + 1) === min}>Назад
            </button>
            <button 
              type="button" name="increment" onClick={onIncrement} 
              className={styles.button} 
              disabled={pageNumber ===  (max - 1)}>Вперед
                                            </button>
        </section>
    )
}

export default Controls;