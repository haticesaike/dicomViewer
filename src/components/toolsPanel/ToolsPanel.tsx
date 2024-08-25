import {useState} from 'react';
import styles from './ToolsPanel.module.css';
import {LuArrowRightToLine} from "react-icons/lu";
import {PiCircleHalfTilt} from "react-icons/pi";
import {TbArrowUpRightCircle} from "react-icons/tb";
import ExportButton from "../exportButton/ExportButton.tsx";
import CreateReportButton from "../createReportButton/CreateReportButton.tsx";
import {useNavigate} from 'react-router-dom';
import {LiaPenSolid} from "react-icons/lia";

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour12: true
    });

    return formatter.format(date).replace(/,/g, '-');
}

const ToolsPanel = ({patient}: { patient: any }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'segmentation' | 'measurements'>('measurements');


    const [selectedMeasurement, setSelectedMeasurement] = useState<number | null>(null);

    const measurementsData = [
        {id: 1, name: 'R1', area: '1599.28 mm²', max: '246.00 HU', slice: 'S:2 I:123'},
        {id: 2, name: 'OrganSER1', area: '3535.25 mm²', max: '198.00 HU', slice: 'S:2 I:123'},
        {id: 3, name: 'OrganSER2', area: '4827.25 mm²', max: '217.00 HU', slice: 'S:2 I:123', editable: true},
    ];

    const handleMeasurementClick = (id: number) => {
        setSelectedMeasurement(id);
    };
    const handleTabClick = (tab: 'segmentation' | 'measurements') => {
        setActiveTab(tab);
    };

    const handleButtonClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={handleButtonClick}>
                <LuArrowRightToLine/>

            </div>
            <div className={styles.info}>
                {/*SEGMENTATION*/}
                <div className={`${styles.tab} ${activeTab === 'segmentation' ? styles.activeTab : ''}`}
                     onClick={() => handleTabClick('segmentation')}>
                    <PiCircleHalfTilt className={styles.icon}/>
                    <div

                    >
                        Segmentation
                    </div>
                </div>

                {/*MEASUREMENTS*/}
                <div className={`${styles.tab} ${activeTab === 'measurements' ? styles.activeTab : ''}`}
                     onClick={() => handleTabClick('measurements')}>
                    <TbArrowUpRightCircle className={styles.icon}/>
                    <div

                    >
                        Measurements
                    </div>
                </div>

            </div>

            <div className={styles.options}>
                <div className={styles.date}>{formatDate(patient.startDate)}</div>
                <div className={styles.description}>{patient.description}</div>
            </div>
            <div className={styles.measurements}>
                {activeTab === 'segmentation' ? (
                    <div>
                        <p>Segmentation Content</p>
                    </div>
                ) : (
                    <div className={styles.measurementsContainer}>
                        <div className={styles.header}>
                            <span>MEASUREMENTS</span>
                            <span>{measurementsData.length}</span>
                        </div>
                        <div className={styles.measurementsList}>
                            {measurementsData.map((measurement) => (
                                <div
                                    key={measurement.id}
                                    className={`${styles.measurementItem} ${
                                        selectedMeasurement === measurement.id ? styles.selected : ''
                                    }`}
                                    onClick={() => handleMeasurementClick(measurement.id)}
                                >
                                    <div className={styles.measurementHeader}>
                                        <span>{measurement.id}</span>
                                        <span>{measurement.name}</span>
                                        {measurement.editable &&
                                            <span className={styles.editIcon}><LiaPenSolid/></span>}
                                    </div>
                                    <div className={styles.measurementDetails}>
                                        <p>{measurement.area}</p>
                                        <p>
                                            Max: {measurement.max} ({measurement.slice})
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}
            </div>
            <div>
                <ExportButton/>
                <CreateReportButton/>
            </div>


        </div>
    )
};

export default ToolsPanel