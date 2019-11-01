import React from 'react';

import styles from './Counter.module.css';

const Counter = ({value, len}) => {
    return (
        <p className={styles.counter}>{value}/{len - 1}</p>
    )           
}

export default Counter;