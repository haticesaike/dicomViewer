import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>Study List</p>
            <p className={styles.description}>30 Studies(duzeltilecek)</p>
        </div>
    )
}

export default Header