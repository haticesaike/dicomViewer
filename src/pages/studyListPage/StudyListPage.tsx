import React, {useState} from 'react';
import styles from './StudyListPage.module.css';
import Header from "../../components/header/Header.tsx";
import Filters from "../../components/filters/Filters.tsx";
import StudyList from "../../components/studyList/StudyList.tsx";
import {mockPatientData} from "../../data/MockData.tsx";


const StudyListPage: React.FC = () => {
    const [filtredPatients, setFilteredPatients] = useState(mockPatientData);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.filters}>
                    <Filters filteredPatients={filtredPatients} setFilteredPatients={setFilteredPatients}/>
                </div>
            </div>
            <div className={styles.bottom}>
                <StudyList filteredPatients={filtredPatients}/>
            </div>
        </div>
    );
}

export default StudyListPage;
