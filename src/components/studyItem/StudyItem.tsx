import React, {useMemo} from 'react';
import {Button} from '@mantine/core';
import {FaArrowRight} from 'react-icons/fa';
import styles from './StudyItem.module.css';
import {mockPatientData} from '../../data/MockData.tsx';
import {useNavigate} from 'react-router-dom';


interface StudyItemProps {
    patientId: string | null;
}

const StudyItem: React.FC<StudyItemProps> = ({patientId}) => {
    const navigate = useNavigate();

    const selectedPatient = useMemo(() => {
        return mockPatientData.find(patient => patient.id === patientId);
    }, [patientId]);

    console.log(patientId)
    return (
        <div className={styles.container}>

            <div className={styles.buttons}>
                {/*BASIC VIEWER BUTTON*/}
                <Button
                    className={styles.button}
                    onClick={() => navigate('/dicom-viewer/' + selectedPatient?.id)}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"

                    styles={() => ({
                        root: {
                            backgroundColor: 'var(--blue-lighter)',
                            color: 'var(--black)',
                            borderRadius: '50px',
                            padding: '10px 20px',
                            display: 'flex',
                            width: 'fit-content',
                            height: '2.5rem',
                            alignItems: 'center',

                        },
                    })}
                >
                    <div className={styles.buttonContent}>
                        <span>Basic Viewer</span>
                        <FaArrowRight style={{marginTop: '1px'}}/>
                    </div>
                </Button>

                {/*TOTAL METABOLIC TUMOR VOLUME BUTTON*/}
                <Button
                    className={styles.button}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    styles={() => ({
                        root: {
                            backgroundColor: 'var(--blue-lighter)',
                            color: 'var(--black)',
                            borderRadius: '50px',
                            padding: '10px 20px',
                            display: 'flex',
                            width: 'fit-content',
                            height: '2.5rem',
                            alignItems: 'center',

                        },
                    })}
                >
                    <div className={styles.buttonContent}>
                        <span>Total Metabolic Tumor Volume</span>
                        <FaArrowRight style={{marginTop: '1px'}}/>
                    </div>
                </Button>


                {/*MICROSCOPY BUTTON*/}
                <Button
                    className={styles.button}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"

                    styles={() => ({
                        root: {
                            backgroundColor: 'var(--blue-lighter)',
                            color: 'var(--black)',
                            borderRadius: '50px',
                            padding: '10px 20px',
                            display: 'flex',
                            width: 'fit-content',
                            height: '2.5rem',
                            alignItems: 'center',
                        },
                    })}
                >
                    <div className={styles.buttonContent}>
                        <span>Microscopy</span>
                        <FaArrowRight style={{marginTop: '1px'}}/>
                    </div>
                </Button>
            </div>

            {/*STUDY DESCRIPTION TABLE*/}
            <div className={styles.table}>
                <div className={styles.header}>
                    <span>Description</span>
                    <span>Series</span>
                    <span>Modality</span>
                    <span>Instances</span>
                </div>
                {selectedPatient?.details.map((detail, index) => (
                    <div className={styles.row} key={index} style={index === 0 ? {paddingTop: '10px'} : {}}>
                        <span>{detail.description}</span>
                        <span>{detail.series}</span>
                        <span>{detail.modality}</span>
                        <span>{detail.instances}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyItem;
