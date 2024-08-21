import React from 'react';
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import 'normalize.css';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudyListPage from "./pages/studyListPage/StudyListPage.tsx";
import DicomViewerPage from "./pages/dicomViewerPage/DicomViewerPage.tsx";


const App: React.FC = () => {

    return (
        <MantineProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<StudyListPage/>}/>
                    <Route path="/dicom-viewer/:patientId" element={<DicomViewerPage/>}/>
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
