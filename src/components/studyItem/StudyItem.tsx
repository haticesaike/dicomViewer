import React from 'react';
import {Button} from '@mantine/core';
import {FaArrowRight} from 'react-icons/fa';
import styles from './StudyItem.module.css';

interface PatientItemProps {
    patient: {
        patientName: string;
        mrn: string;
        startDate: string;
        endDate: string;
        description: string;
        modality: string;
        accession: string;
        instances: number;
    };
}

const StudyItem: React.FC<PatientItemProps> = ({}) => {
    return (
        <div className={styles.container}>

            {/*BASIC VIEWER BUTTON*/}
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
    );
};

export default StudyItem;
