import React from 'react';
import styles from './StudyListPage.module.css';
import Header from "../../components/header/Header.tsx";
import Filters from "../../components/filters/Filters.tsx";
import StudyList from "../../components/studyList/StudyList.tsx";

const StudyListPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.filters}>
                    <Filters/>
                </div>
            </div>
            <div className={styles.bottom}>
                <StudyList/>
            </div>
        </div>
    );
}

export default StudyListPage;
