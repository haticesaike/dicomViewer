import React from 'react';
import styles from './DicomViewerPage.module.css';
import ImageHeader from "../../components/imageHeader/ImageHeader.tsx";
import ToolsPanel from "../../components/toolsPanel/ToolsPanel.tsx";
import DicomImageViewer from "../../components/dicomImageViewer/DicomImageViewer.tsx";
import {useLocation} from "react-router-dom";


const DicomViewerPage: React.FC = () => {
    const location = useLocation();

    const {patient} = location.state as { patient: any };
    console.log(patient);


    return (
        <div className={styles.container}>
            <div className={styles.dicomViewer}>
                <div className={styles.header}>
                    <ImageHeader patient={patient}/>
                </div>
                <div className={styles.dicomImage}>
                    <DicomImageViewer/>
                </div>
            </div>
            <div className={styles.panel}><ToolsPanel patient={patient}/>
            </div>
        </div>
    )
};

export default DicomViewerPage