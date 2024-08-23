import React from 'react';

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

const StudyItem: React.FC<PatientItemProps> = ({patient}) => {
    return (
        <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
            <h3>{patient.patientName}</h3>
            <p><strong>MRN:</strong> {patient.mrn}</p>
            <p><strong>Study Period:</strong> {patient.startDate} - {patient.endDate}</p>
            <p><strong>Description:</strong> {patient.description}</p>
            <p><strong>Modality:</strong> {patient.modality}</p>
            <p><strong>Accession:</strong> {patient.accession}</p>
            <p><strong>Instances:</strong> {patient.instances}</p>
        </div>
    );
};

export default StudyItem;
