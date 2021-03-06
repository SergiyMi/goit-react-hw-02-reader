import React from 'react';

import styles from './Publication.module.css';

const Publication = ({id, title, text, items, pageNumber}) => {
    let it = items.filter((item, index) => index===pageNumber);
    return (
        <article className={styles.publication}>
            <h2>{it[0].title}</h2>
            <p>{it[0].text}</p>
        </article>
    )
}

export default Publication;