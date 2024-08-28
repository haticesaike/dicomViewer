import React from 'react';
import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudyListPage from "./pages/studyListPage/StudyListPage.tsx";
import DicomViewerPage from "./pages/dicomViewerPage/DicomViewerPage.tsx";
import {Provider as JotaiProvider} from 'jotai'


const App: React.FC = () => {

    return (
        <JotaiProvider>
            <MantineProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<StudyListPage/>}/>
                        <Route path="/dicom-viewer/:patientId" element={<DicomViewerPage/>}/>
                    </Routes>
                </Router>
            </MantineProvider>
        </JotaiProvider>
    )
}

export default App
