import React from 'react';

import styles from './Controls.module.css';

const Controls = ({onIncrement, value, max}) => {
    const min = 1;
    return (
        <section className={styles.controls}>
            <button type="button" name="decrement" onClick={onIncrement} className={styles.button} disabled={(value + 1) === min ? true : false}>Назад</button>
            <button type="button" name="increment" onClick={onIncrement} className={styles.button} disabled={value ===  (max - 1) ? true : false}>Вперед</button>
        </section>
    )
}

export default Controls;