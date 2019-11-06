import React from 'react';

import styles from './Counter.module.css';

const Counter = ({value, len}) =>
    (
        <p className={styles.counter}>{value + 1}/{len}</p>
    )           

export default Counter;