import React from 'react';

import styles from './Controls.module.css';

const Controls = ({onIncrement, onDecrement}) => {
    return (
        <section className={styles.controls}>
            <button type="button" onClick={onDecrement} className={styles.button}>Назад</button>
            <button type="button" onClick={onIncrement} className={styles.button}>Вперед</button>
        </section>
    )
}

export default Controls;