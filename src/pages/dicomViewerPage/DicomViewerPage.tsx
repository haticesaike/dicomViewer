import React from 'react';
import styles from './DicomViewerPage.module.css';
import ImageHeader from "../../components/imageHeader/ImageHeader.tsx";
import ToolsPanel from "../../components/toolsPanel/ToolsPanel.tsx";

const DicomViewerPage: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.dicomViewer}>
                <div className={styles.header}>
                    <ImageHeader/>
                </div>
                <div className={styles.dicomImage}>
                </div>
            </div>
            <div className={styles.panel}><ToolsPanel/>
            </div>
        </div>
    )
};

export default DicomViewerPage