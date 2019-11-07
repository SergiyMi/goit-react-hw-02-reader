import React from 'react';

import styles from './Counter.module.css';

const Counter = ({pageNumber, len}) =>
    (
        <p className={styles.counter}>{pageNumber + 1}/{len}</p>
    )           

export default Counter;