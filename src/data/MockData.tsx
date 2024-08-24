export const mockPatientData = [
    {
        id: "FEC1B42E",
        patientName: "John Doe",
        mrn: "MRN123456",
        startDate: "2023-05-10T14:30:00",
        endDate: "2023-05-10T15:45:00",
        description: "CT/PT Whole Body",
        modality: "CT/PT",
        accession: "ACC001",
        instances: 10163,
        details: [
            {description: "nscan1198a_ct1 split M1", series: 4, modality: "CT", instances: 763},
            {description: "nscan1198a_em1 split M1", series: 6, modality: "PT", instances: 9400},
        ]
    },
    {
        id: "A7C9D3F1",
        patientName: "Jane Smith",
        mrn: "MRN789012",
        startDate: "2023-07-20T09:00:00",
        endDate: "2023-07-20T10:30:00",
        description: "MRI Brain with contrast",
        modality: "MRI",
        accession: "ACC002",
        instances: 1500,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 500},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 500},
            {description: "FLAIR", series: 2, modality: "MRI", instances: 500},
        ]
    },
    {
        id: "B8E2F5A0",
        patientName: "Alice Brown",
        mrn: "MRN345678",
        startDate: "2023-06-13T11:15:00",
        endDate: "2023-06-13T11:30:00",
        description: "Chest X-ray PA and Lateral",
        modality: "XRAY",
        accession: "ACC003",
        instances: 2,
        details: [
            {description: "PA View", series: 1, modality: "XRAY", instances: 1},
            {description: "Lateral View", series: 1, modality: "XRAY", instances: 1},
        ]
    },
    {
        id: "C1D4E7B9",
        patientName: "Bob Johnson",
        mrn: "MRN901234",
        startDate: "2023-08-01T13:45:00",
        endDate: "2023-08-01T14:30:00",
        description: "Abdominal and Pelvic CT with contrast",
        modality: "CT",
        accession: "ACC004",
        instances: 1200,
        details: [
            {description: "Abdomen", series: 2, modality: "CT", instances: 600},
            {description: "Pelvis", series: 2, modality: "CT", instances: 600},
        ]
    },
    {
        id: "E3F6G9H2",
        patientName: "Charlie Davis",
        mrn: "MRN567890",
        startDate: "2023-04-05T10:00:00",
        endDate: "2023-04-05T11:30:00",
        description: "PET-CT Whole Body",
        modality: "PET/CT",
        accession: "ACC005",
        instances: 15000,
        details: [
            {description: "CT Attenuation Correction", series: 1, modality: "CT", instances: 1000},
            {description: "PET Whole Body", series: 8, modality: "PET", instances: 14000},
        ]
    },
    {
        id: "D2E5F8G1",
        patientName: "Emma Wilson",
        mrn: "MRN234567",
        startDate: "2023-09-15T08:30:00",
        endDate: "2023-09-15T09:15:00",
        description: "Mammography Screening",
        modality: "MAMMO",
        accession: "ACC006",
        instances: 4,
        details: [
            {description: "Right CC", series: 1, modality: "MAMMO", instances: 1},
            {description: "Left CC", series: 1, modality: "MAMMO", instances: 1},
            {description: "Right MLO", series: 1, modality: "MAMMO", instances: 1},
            {description: "Left MLO", series: 1, modality: "MAMMO", instances: 1},
        ]
    },
    {
        id: "H7I1J4K9",
        patientName: "Frank Harris",
        mrn: "MRN678901",
        startDate: "2023-10-20T14:00:00",
        endDate: "2023-10-20T15:00:00",
        description: "Cardiac MRI",
        modality: "MRI",
        accession: "ACC007",
        instances: 2000,
        details: [
            {description: "Cine SSFP", series: 4, modality: "MRI", instances: 800},
            {description: "T1 Mapping", series: 3, modality: "MRI", instances: 600},
            {description: "Late Gadolinium Enhancement", series: 3, modality: "MRI", instances: 600},
        ]
    },
    {
        id: "K2L5M8N1",
        patientName: "Grace Lee",
        mrn: "MRN012345",
        startDate: "2023-11-05T11:30:00",
        endDate: "2023-11-05T12:15:00",
        description: "Abdominal Ultrasound",
        modality: "US",
        accession: "ACC008",
        instances: 50,
        details: [
            {description: "Liver", series: 1, modality: "US", instances: 15},
            {description: "Gallbladder", series: 1, modality: "US", instances: 10},
            {description: "Pancreas", series: 1, modality: "US", instances: 10},
            {description: "Kidneys", series: 1, modality: "US", instances: 15},
        ]
    },
    {
        id: "N6O9P2Q5",
        patientName: "Henry Walker",
        mrn: "MRN345678",
        startDate: "2023-12-10T09:45:00",
        endDate: "2023-12-10T10:30:00",
        description: "CT Angiography Coronary Arteries",
        modality: "CT",
        accession: "ACC009",
        instances: 3000,
        details: [
            {description: "Calcium Scoring", series: 1, modality: "CT", instances: 200},
            {description: "Coronary CTA", series: 2, modality: "CT", instances: 2800},
        ]
    },
    {
        id: "R3S6T9U2",
        patientName: "Isabel Garcia",
        mrn: "MRN901234",
        startDate: "2024-01-15T13:00:00",
        endDate: "2024-01-15T14:30:00",
        description: "Whole Body Bone Scan",
        modality: "NM",
        accession: "ACC010",
        instances: 120,
        details: [
            {description: "Whole Body Anterior", series: 1, modality: "NM", instances: 60},
            {description: "Whole Body Posterior", series: 1, modality: "NM", instances: 60},
        ]
    },
    {
        id: "V5W8X1Y4",
        patientName: "Jack Brown",
        mrn: "MRN567890",
        startDate: "2024-02-20T10:15:00",
        endDate: "2024-02-20T11:00:00",
        description: "CT Head without contrast",
        modality: "CT",
        accession: "ACC011",
        instances: 800,
        details: [
            {description: "Brain", series: 2, modality: "CT", instances: 600},
            {description: "Skull Base", series: 1, modality: "CT", instances: 200},
        ]
    },
    {
        id: "Z7A1B4C7",
        patientName: "Karen Davis",
        mrn: "MRN123789",
        startDate: "2024-03-05T15:30:00",
        endDate: "2024-03-05T16:15:00",
        description: "MRI Knee",
        modality: "MRI",
        accession: "ACC012",
        instances: 1000,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "PD Weighted", series: 2, modality: "MRI", instances: 200},
            {description: "STIR", series: 2, modality: "MRI", instances: 200},
        ]
    },
    {
        id: "D8E2F5G9",
        patientName: "Liam Wilson",
        mrn: "MRN456123",
        startDate: "2024-04-10T08:45:00",
        endDate: "2024-04-10T09:30:00",
        description: "CT Chest with contrast",
        modality: "CT",
        accession: "ACC013",
        instances: 1500,
        details: [
            {description: "Lung Parenchyma", series: 2, modality: "CT", instances: 1000},
            {description: "Mediastinum", series: 1, modality: "CT", instances: 500},
        ]
    },
    {
        id: "H1I4J7K0",
        patientName: "Mia Taylor",
        mrn: "MRN789456",
        startDate: "2024-05-15T11:00:00",
        endDate: "2024-05-15T12:30:00",
        description: "MRI Lumbar Spine",
        modality: "MRI",
        accession: "ACC014",
        instances: 1200,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 400},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 400},
            {description: "STIR", series: 2, modality: "MRI", instances: 400},
        ]
    },
    {
        id: "L3M6N9P2",
        patientName: "Noah Anderson",
        mrn: "MRN234890",
        startDate: "2024-06-20T14:15:00",
        endDate: "2024-06-20T15:00:00",
        description: "Renal Ultrasound",
        modality: "US",
        accession: "ACC015",
        instances: 60,
        details: [
            {description: "Right Kidney", series: 1, modality: "US", instances: 30},
            {description: "Left Kidney", series: 1, modality: "US", instances: 30},
        ]
    },
    {
        id: "Q5R8S1T4",
        patientName: "Olivia Martinez",
        mrn: "MRN567234",
        startDate: "2024-07-25T09:30:00",
        endDate: "2024-07-25T10:45:00",
        description: "CT/PT Brain",
        modality: "CT/PT",
        accession: "ACC016",
        instances: 8000,
        details: [
            {description: "CT Brain", series: 2, modality: "CT", instances: 600},
            {description: "PET Brain", series: 4, modality: "PT", instances: 7400},
        ]
    },
    {
        id: "U7V0W3X6",
        patientName: "Paul Johnson",
        mrn: "MRN890567",
        startDate: "2024-08-30T13:00:00",
        endDate: "2024-08-30T13:30:00",
        description: "Chest X-ray",
        modality: "XRAY",
        accession: "ACC017",
        instances: 1,
        details: [
            {description: "PA View", series: 1, modality: "XRAY", instances: 1},
        ]
    },
    {
        id: "Y9Z2A5B8",
        patientName: "Quinn Lee",
        mrn: "MRN123678",
        startDate: "2024-09-05T10:45:00",
        endDate: "2024-09-05T11:30:00",
        description: "CT Sinus",
        modality: "CT",
        accession: "ACC018",
        instances: 600,
        details: [
            {description: "Axial", series: 1, modality: "CT", instances: 200},
            {description: "Coronal", series: 1, modality: "CT", instances: 200},
            {description: "Sagittal", series: 1, modality: "CT", instances: 200},
        ]
    },
    {
        id: "C1D4E7F0",
        patientName: "Rachel White",
        mrn: "MRN456901",
        startDate: "2024-10-10T15:15:00",
        endDate: "2024-10-10T16:00:00",
        description: "MRI Shoulder",
        modality: "MRI",
        accession: "ACC019",
        instances: 900,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "PD Weighted", series: 2, modality: "MRI", instances: 300},
        ]
    },
    {
        id: "G3H6I9J2",
        patientName: "Samuel Brown",
        mrn: "MRN789234",
        startDate: "2024-11-15T08:30:00",
        endDate: "2024-11-15T09:15:00",
        description: "Abdominal X-ray Series",
        modality: "XRAY",
        accession: "ACC020",
        instances: 3,
        details: [
            {description: "Supine", series: 1, modality: "XRAY", instances: 1},
            {description: "Upright", series: 1, modality: "XRAY", instances: 1},
            {description: "Left Lateral Decubitus", series: 1, modality: "XRAY", instances: 1},
        ]
    },
    {
        id: "K5L8M1N4",
        patientName: "Tina Garcia",
        mrn: "MRN012789",
        startDate: "2024-12-20T11:00:00",
        endDate: "2024-12-20T12:30:00",
        description: "MRI Cervical Spine",
        modality: "MRI",
        accession: "ACC021",
        instances: 1100,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 300},
            {description: "STIR", series: 2, modality: "MRI", instances: 250},
            {description: "Myelogram", series: 1, modality: "MRI", instances: 250},
        ]
    },
    {
        id: "O7P0Q3R6",
        patientName: "Ulysses Taylor",
        mrn: "MRN345012",
        startDate: "2025-01-25T14:30:00",
        endDate: "2025-01-25T15:15:00",
        description: "CT Pulmonary Angiogram",
        modality: "CT",
        accession: "ACC022",
        instances: 2000,
        details: [
            {description: "Pulmonary Arteries", series: 2, modality: "CT", instances: 1500},
            {description: "Lung Parenchyma", series: 1, modality: "CT", instances: 500},
        ]
    },
    {
        id: "S9T2U5V8",
        patientName: "Violet Anderson",
        mrn: "MRN678123",
        startDate: "2025-02-28T09:45:00",
        endDate: "2025-02-28T10:30:00",
        description: "Thyroid Ultrasound",
        modality: "US",
        accession: "ACC023",
        instances: 40,
        details: [
            {description: "Thyroid Gland", series: 1, modality: "US", instances: 30},
            {description: "Cervical Lymph Nodes", series: 1, modality: "US", instances: 10},
        ]
    },
    {
        id: "W1X4Y7Z0",
        patientName: "William Johnson",
        mrn: "MRN901456",
        startDate: "2025-03-15T13:15:00",
        endDate: "2025-03-15T14:45:00",
        description: "MRI Brain with spectroscopy",
        modality: "MRI",
        accession: "ACC024",
        instances: 1800,
        details: [
            {description: "T1 Weighted", series: 3, modality: "MRI", instances: 400},
            {description: "T2 Weighted", series: 3, modality: "MRI", instances: 400},
            {description: "FLAIR", series: 2, modality: "MRI", instances: 400},
            {description: "DWI", series: 2, modality: "MRI", instances: 300},
            {description: "Spectroscopy", series: 1, modality: "MRI", instances: 300},
        ]
    },
    {
        id: "A3B6C9D2",
        patientName: "Xena Brown",
        mrn: "MRN234567",
        startDate: "2025-04-20T10:00:00",
        endDate: "2025-04-20T11:00:00",
        description: "Bone Densitometry",
        modality: "DEXA",
        accession: "ACC025",
        instances: 6,
        details: [
            {description: "Lumbar Spine", series: 1, modality: "DEXA", instances: 2},
            {description: "Left Hip", series: 1, modality: "DEXA", instances: 2},
            {description: "Right Hip", series: 1, modality: "DEXA", instances: 2},
        ]
    }
];