import React from 'react';
import {Accordion} from '@mantine/core';
import {mockPatientData} from '../../data/MockData.tsx';
import StudyItem from "../studyItem/StudyItem.tsx";
import styles from './StudyList.module.css';

const PatientList: React.FC = () => {
    return (
        <Accordion
            transitionDuration={300}
            chevronPosition="left"
            radius="md"
            styles={() => ({
                item: {
                    border: `2px solid var(--indigo-purple)`,
                    borderBottom: 'none',
                    '&[data-active]': {
                        borderColor: 'var(--black)',
                    },
                },
                control: {
                    color: 'var(--white)',
                    padding: '5px',
                    backgroundColor: 'var(--primary)',
                    borderBottom: 'none',
                    '&:hover': {
                        backgroundColor: 'var(--primary)',
                    },

                },
                panel: {
                    backgroundColor: 'var(--blue-dark)',
                    color: 'var(--white)',
                    borderTop: 'none',
                },
            })}
        >
            {mockPatientData.map((patient) => (
                <Accordion.Item value={patient.id.toString()} key={patient.id}>
                    <Accordion.Control>
                        <div className={styles.accordionControl}>
                            <span>{patient.patientName}</span>
                            <span>{patient.mrn}</span>
                            <span>{patient.startDate}</span>
                            <span>{patient.description}</span>
                            <span>{patient.modality}</span>
                            <span>{patient.accession}</span>
                            <span>{patient.instances}</span>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <StudyItem patient={patient}/>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>

    );
};

export default PatientList;
