import React from 'react';
import {useState, useEffect} from 'react';
import styles from './Filters.module.css';
import {Input} from '@mantine/core';
import SortingIcon from "../utils/sortingIcon.tsx";
import {DateInput} from '@mantine/dates';
import {Select} from '@mantine/core';
import {mockPatientData} from "../../data/MockData.tsx";

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

const Filters = ({filteredPatients, setFilteredPatients}: {
    filteredPatients: PatientData[];
    setFilteredPatients: React.Dispatch<React.SetStateAction<PatientData[]>>
}) => {
    const [patientName, setPatientName] = useState('');
    const [mrn, setMrn] = useState('');
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState<string | null>('');
    const [accession, setAccession] = useState('');
    const [instances, setInstances] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [uniqueModalities, setUniqueModalities] = useState<{ value: string; label: string }[]>([]);


    useEffect(() => {
        const allModalities = filteredPatients.flatMap(patient => patient.modality);
        const uniqueModalitiesSet = Array.from(new Set(allModalities));

        const modalityData = uniqueModalitiesSet.map(modality => ({
            value: modality.toLowerCase(),
            label: modality.toUpperCase()
        }));

        setUniqueModalities(modalityData);
    }, [filteredPatients]);

    const handleInputChange = (criteria: keyof PatientData, value: string | number | Date) => {
        // Reset all other states except the one being changed
        setPatientName('');
        setMrn('');
        setDescription('');
        setModality('');
        setAccession('');
        setInstances('');
        setStartDate(null);
        setEndDate(null);

        if (criteria !== 'details') {
            setFilteredPatients(
                mockPatientData.filter((patient) => {
                    const patientValue = patient[criteria];

                    if (typeof patientValue === 'string' && typeof value === 'string') {
                        return patientValue.toLowerCase().includes(value.toLowerCase());
                    }

                    if (typeof patientValue === 'number') {
                        return String(patientValue).includes(value.toString());
                    }

                    if (criteria === 'startDate' || criteria === 'endDate') {
                        const patientDate = new Date(patientValue as string);
                        const filterDate = new Date(value);

                        return (
                            patientDate.getFullYear() === filterDate.getFullYear() &&
                            patientDate.getMonth() === filterDate.getMonth() &&
                            patientDate.getDate() === filterDate.getDate()
                        );
                    }

                    return false;
                })
            );
        }
    };
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
                       onChange={(e) => {
                           handleInputChange('patientName', e.target.value);
                           setPatientName(e.target.value);
                       }}
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
                       onChange={(e) => {
                           handleInputChange('mrn', e.target.value);
                           setMrn(e.target.value);
                       }}
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
                    onChange={(date) => {
                        handleInputChange('startDate', date as Date);
                        setStartDate(date);
                    }}
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
                    onChange={(date) => {
                        handleInputChange('endDate', date as Date);
                        setEndDate(date);
                    }}
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
                       onChange={(e) => {
                           handleInputChange('description', e.target.value);
                           setDescription(e.target.value);
                       }}
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
                data={uniqueModalities}
                value={modality}
                onChange={(value) => {
                    handleInputChange('modality', value || '');
                    setModality(value);
                }}
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
                       onChange={(e) => {
                           handleInputChange('accession', e.target.value);
                           setAccession(e.target.value);
                       }}
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
                       onChange={(e) => {
                           handleInputChange('instances', e.target.value);
                           setInstances(e.target.value);
                       }}
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
