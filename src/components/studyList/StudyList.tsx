import {useState} from 'react';
import {Accordion} from '@mantine/core';
import StudyItem from "../studyItem/StudyItem.tsx";
import styles from './StudyList.module.css';

interface Detail {
    description: string;
    series: number;
    modality: string;
    instances: number;
}

interface PatientData {
    id: string;
    patientName: string;
    mrn: string;
    startDate: string;
    endDate: string;
    description: string;
    modality: string[];
    accession: string;
    instances: number;
    details: Detail[];
}

const PatientList = ({filteredPatients}: {
    filteredPatients: PatientData[],
}) => {
    const [openedItem, setOpenedItem] = useState<string | null>(null);

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        return formatter.format(date).replace(/,/g, '-');
    }

    return (
        <Accordion
            transitionDuration={300}
            chevronPosition="left"
            value={openedItem}
            onChange={(value: string | null) => setOpenedItem(value)}
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
                    backgroundColor: 'var(--black)',
                    color: 'var(--white)',
                    borderTop: 'none',
                },
            })}
        >
            {filteredPatients.map((patient) => (
                <Accordion.Item value={patient.id.toString()} key={patient.id}>
                    <Accordion.Control>
                        <div className={styles.accordionControl}>
                            <span>{patient.patientName}</span>
                            <span>{patient.mrn}</span>
                            <span>{formatDate(patient.startDate)}</span>
                            <span>{patient.description}</span>
                            <span>{patient.modality.join('/')}</span>
                            <span>{patient.accession}</span>
                            <span>{patient.instances}</span>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <StudyItem patientId={openedItem}/>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>

    );
};

export default PatientList;
