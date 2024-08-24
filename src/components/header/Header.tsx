import React from 'react';
import styles from './Header.module.css';
import {mockPatientData} from "../../data/MockData.tsx";

const Header: React.FC = () => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>Study List</p>
            <p className={styles.description}>{mockPatientData.length}</p>
        </div>
    )
}

export default Header