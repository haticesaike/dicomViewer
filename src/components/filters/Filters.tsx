import React, {useState} from 'react';
import styles from './Filters.module.css';
import {Input} from '@mantine/core';
import SortingIcon from "../utils/sortingIcon.tsx";
import {DateInput} from '@mantine/dates';
import {Select} from '@mantine/core';


const Filters: React.FC = () => {
    const [patientName, setPatientName] = useState('');
    const [mrn, setMrn] = useState('');
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState<string | null>('');
    const [accession, setAccession] = useState('');
    const [instances, setInstances] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);


    const mockModalityData = [
        {value: 'ct', label: 'CT'},
        {value: 'mri', label: 'MRI'},
        {value: 'xray', label: 'X-ray'},
        {value: 'us', label: 'Ultrasound'},
        {value: 'pet-ct', label: 'PET-CT'},
        {value: 'nucmed', label: 'Nuclear Medicine'},
    ];
    return (
        <div className={styles.container}>


            {/*PATIENT NAME*/}
            <Input.Wrapper>
                <div className={styles.inputWrapper}>
                    <Input.Label>Patient Name</Input.Label>
                    <SortingIcon/>
                </div>
                <Input className={styles.input}
                       value={patientName}
                       onChange={(e) => setPatientName(e.target.value)}
                       styles={() => ({
                           input: {
                               backgroundColor: 'var(--black)',
                               borderColor: 'var(--black)',
                               color: 'var(--white)'
                           }
                       })}/>
            </Input.Wrapper>


            {/*MRN*/}
            <Input.Wrapper>
                <div className={styles.inputWrapper}>
                    <Input.Label>MRN</Input.Label>
                    <SortingIcon/>
                </div>
                <Input className={styles.input}
                       value={mrn}
                       onChange={(e) => setMrn(e.target.value)}
                       styles={() => ({
                           input: {
                               backgroundColor: 'var(--black)',
                               borderColor: 'var(--black)',
                               color: 'var(--white)'
                           }
                       })}/>
            </Input.Wrapper>

            {/*DATE*/}
            <div className={styles.dateInputContainer}>
                <DateInput
                    value={startDate}
                    onChange={setStartDate}
                    label={
                        <div className={styles.labelWithIcon}>
                            Study Date
                            <SortingIcon/>
                        </div>
                    }
                    placeholder="Start Date"
                    classNames={{
                        input: styles.dateInputLeft,
                        label: styles.dateInputLabel,
                    }}
                />
                <DateInput
                    value={endDate}
                    onChange={setEndDate}
                    label={
                        <div className={styles.labelWithIcon} style={{marginBottom: "1.8rem"}}>
                        </div>
                    }
                    placeholder="End Date"
                    classNames={{
                        input: styles.dateInputRight,
                        label: styles.dateInputLabel,
                    }}
                />
            </div>


            {/*DESCRIPTION*/}
            <Input.Wrapper>
                <div className={styles.inputWrapper}>
                    <Input.Label>Description</Input.Label>
                    <SortingIcon/>
                </div>
                <Input className={styles.input}
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       styles={() => ({
                           input: {
                               backgroundColor: 'var(--black)',
                               borderColor: 'var(--black)',
                               color: 'var(--white)'
                           }
                       })}/>
            </Input.Wrapper>


            {/*MODALITY*/}
            <Select
                label="Modality"
                data={mockModalityData}
                value={modality}
                onChange={setModality}
                styles={() => ({
                    input: {
                        backgroundColor: 'var(--black)',
                        borderColor: 'var(--black)',
                        color: 'var(--white)',
                        width: '11rem',
                        border: '2px solid var(--indigo-purple)',
                        height: '2.5rem',

                    },
                    label: {
                        marginBottom: '10px',
                    },

                })}
            />


            {/*ACCESSION*/}
            <Input.Wrapper>
                <div className={styles.inputWrapper}>
                    <Input.Label>Accession #</Input.Label>
                    <SortingIcon/>
                </div>
                <Input className={styles.input}
                       value={accession}
                       onChange={(e) => setAccession(e.target.value)}
                       styles={() => ({
                           input: {
                               backgroundColor: 'var(--black)',
                               borderColor: 'var(--black)',
                               color: 'var(--white)'
                           }
                       })}/>
            </Input.Wrapper>


            {/*INSTANCES*/}
            <Input.Wrapper>
                <div className={styles.inputWrapper}>
                    <Input.Label>Instances</Input.Label>
                    <SortingIcon/>
                </div>
                <Input className={styles.input}
                       value={instances}
                       onChange={(e) => setInstances(e.target.value)}
                       styles={() => ({
                           input: {
                               backgroundColor: 'var(--black)',
                               borderColor: 'var(--black)',
                               color: 'var(--white)'
                           }
                       })}/>
            </Input.Wrapper>
        </div>
    )
}

export default Filters;
