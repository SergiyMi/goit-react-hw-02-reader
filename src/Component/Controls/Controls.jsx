import React from 'react';

import styles from './Controls.module.css';

const Controls = ({onIncrement, onDecrement, value, max, min}) => {
    return (
        <section className={styles.controls}>
             {(value + 1) === min ? 
            <>
            <button type="button" onClick={onDecrement} className={styles.button} disabled>Назад</button>
            <button type="button" onClick={onIncrement} className={styles.button}>Вперед</button>
            </>
            : 
            value ===  (max - 1) ? 
            <>
            <button type="button" onClick={onDecrement} className={styles.button}>Назад</button>
            <button type="button" onClick={onIncrement} className={styles.button} disabled>Вперед</button>
            </>
            : 
            <>
            <button type="button" onClick={onDecrement} className={styles.button}>Назад</button>
            <button type="button" onClick={onIncrement} className={styles.button}>Вперед</button>
            </>
            }
        </section>
    )
}

export default Controls;