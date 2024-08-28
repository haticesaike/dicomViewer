import {useEffect, useState} from 'react';
import styles from './ToolsPanel.module.css';
import {LuArrowRightToLine} from "react-icons/lu";
import {PiCircleHalfTilt} from "react-icons/pi";
import {TbArrowUpRightCircle} from "react-icons/tb";
import ExportButton from "../exportButton/ExportButton.tsx";
import CreateReportButton from "../createReportButton/CreateReportButton.tsx";
import {useNavigate} from 'react-router-dom';
import {useAtom} from 'jotai'
import {toolStateAtom} from "../../jotai/atoms.tsx";

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

const ToolsPanel = ({
                        patient,
                    }: {
    patient: any,
}) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'segmentation' | 'measurements'>('measurements');
    const [selectedMeasurement, setSelectedMeasurement] = useState<number | null>(null);

    const [toolState,] = useAtom(toolStateAtom)

    const handleMeasurementClick = (id: number) => {
        setSelectedMeasurement(id);
    };
    const handleTabClick = (tab: 'segmentation' | 'measurements') => {
        setActiveTab(tab);
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        console.log(toolState)
    }, [
        toolState
    ]);

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
                            <span>{toolState.length}</span>
                        </div>
                        <div className={styles.measurementsList}>
                            {toolState && toolState.length > 0 && toolState.map((measurement, index: number) => (
                                <div
                                    key={measurement.uuid}
                                    className={`${styles.measurementItem} ${
                                        selectedMeasurement === measurement.uuid ? styles.selected : ''
                                    }`}
                                    onClick={() => handleMeasurementClick(measurement.uuid)}
                                >
                                    <div className={styles.measurementHeader}>
                                        <span>{index + 1}</span>
                                        <span>{''}</span>

                                    </div>
                                    <div className={styles.measurementDetails}>
                                        <p>{measurement.cachedStats?.area ? (measurement.cachedStats.area / 1).toFixed(2) : ' N/A '}mm²</p>
                                        <p>Max: {measurement.cachedStats?.max ? measurement.cachedStats.max : ' N/A '}mm²</p>
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