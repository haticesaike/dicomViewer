import React, {useEffect, useState} from 'react';
import styles from './ToolsPanel.module.css';
import {LuArrowRightToLine} from "react-icons/lu";
import {PiCircleHalfTilt} from "react-icons/pi";
import {TbArrowUpRightCircle} from "react-icons/tb";
import ExportButton from "../exportButton/ExportButton.tsx";
import CreateReportButton from "../createReportButton/CreateReportButton.tsx";
import {useNavigate} from 'react-router-dom';
import {useAtom} from 'jotai';
import {toolStateAtom} from "../../jotai/atoms.tsx";
import {TiPencil} from "react-icons/ti";
import Modal from '../modal/Modal';
import {IoClose} from "react-icons/io5";

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
    const [toolState, setToolState] = useAtom(toolStateAtom);
    const [labelState, setLabelState] = useState<string[]>(() => toolState.map(() => ''));
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editLabelIndex, setEditLabelIndex] = useState<number | null>(null);
    const handleMeasurementClick = (id: number) => {
        setSelectedMeasurement(id);
    };

    const handleTabClick = (tab: 'segmentation' | 'measurements') => {
        setActiveTab(tab);
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    const handleEditButtonClick = (index: number) => {
        setEditLabelIndex(index);
        setIsModalOpen(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newLabelState = [...labelState];
        newLabelState[index] = event.target.value;
        setLabelState(newLabelState);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEditLabelIndex(null);
    };

    const handleDeleteButtonClick = (id: string) => {
        toolState.forEach((tool, index) => {
            if (tool.uuid === id) {
                setToolState((prev) => prev.filter((tool, i) => i !== index));
            }
        })

    };


    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={handleButtonClick}>
                <LuArrowRightToLine/>
            </div>
            <div className={styles.info}>
                {/* SEGMENTATION */}
                <div className={`${styles.tab} ${activeTab === 'segmentation' ? styles.activeTab : ''}`}
                     onClick={() => handleTabClick('segmentation')}>
                    <PiCircleHalfTilt className={styles.icon}/>
                    <div>Segmentation</div>
                </div>

                {/* MEASUREMENTS */}
                <div className={`${styles.tab} ${activeTab === 'measurements' ? styles.activeTab : ''}`}
                     onClick={() => handleTabClick('measurements')}>
                    <TbArrowUpRightCircle className={styles.icon}/>
                    <div>Measurements</div>
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
                                <div key={measurement.uuid} className={styles.measurementCover}>
                                    <div
                                        className={`${styles.measurementIndex} ${
                                            selectedMeasurement === measurement.uuid ? styles.selected : ''
                                        }`}
                                        onClick={() => handleMeasurementClick(measurement.uuid)}
                                    >
                                        {/* Index */}
                                        <span className={styles.index}>{index + 1}</span>

                                        {/* Remove icon */}
                                        <span onClick={() => handleDeleteButtonClick(measurement.uuid)}
                                              className={styles.removeIcon}>
    <IoClose/>

  </span>
                                    </div>

                                    <div className={styles.measurementItem}>
                                        <div className={styles.measurementHeader}>
                                            <span
                                                className={styles.measurementLabel}>{labelState[index] ? labelState[index] : '(empty)'}</span>
                                            {selectedMeasurement === measurement.uuid && (
                                                <div onClick={() => handleEditButtonClick(index)}
                                                     className={styles.editButton}>
                                                    <TiPencil/>
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.measurementDetails}>
                                            <p>{measurement.cachedStats?.area ? (measurement.cachedStats.area / 1).toFixed(2) : ' N/A '}mm²</p>
                                            <p>Max: {measurement.cachedStats?.max ? measurement.cachedStats.max : ' N/A '}mm²</p>
                                        </div>
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

            {/*MODAL*/}
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                {editLabelIndex !== null && (
                    <input
                        type="text"
                        value={labelState[editLabelIndex]}
                        onChange={(e) => handleInputChange(e, editLabelIndex)}
                        className={styles.input}
                    />
                )}
            </Modal>
        </div>
    );
};

export default ToolsPanel;
