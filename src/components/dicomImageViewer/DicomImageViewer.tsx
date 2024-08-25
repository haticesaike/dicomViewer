import React, {useEffect, useRef, useState} from 'react';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';

const DICOM_IMAGE_ID = 'http://localhost:5173/example.dcm';

const DicomImageViewer: React.FC = () => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState(cornerstone.getDefaultViewport(null, undefined));

    useEffect(() => {
        const element = viewerRef.current;

        if (!element) {
            return;
        }

        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
        cornerstoneTools.external.cornerstone = cornerstone;
        cornerstoneTools.external.Hammer = Hammer;

        const config = {
            maxWebWorkers: navigator.hardwareConcurrency || 1,
            startWebWorkersOnDemand: true,
            taskConfiguration: {
                'decodeTask': {
                    initializeCodecsOnStartup: false,
                    usePDFJS: false
                }
            }
        };

        cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

        const loadImage = async () => {
            try {
                await cornerstone.loadAndCacheImage(`wadouri:${DICOM_IMAGE_ID}`).then((image) => {
                    cornerstone.displayImage(element, image);


                });
            } catch (error) {
                console.error('Error loading DICOM image:', error);
            }
        };

        loadImage().then(() => {
            cornerstoneTools.addStackStateManager(element, ['stack']);
            cornerstoneTools.addToolState(element, 'RectangleROITool', {
                imageIds: [DICOM_IMAGE_ID],
                currentImageIdIndex: 0
            });
        })
        cornerstone.enable(element);


        return () => {
            if (element) {
                element.removeEventListener('cornerstoneimagerendered', onImageRendered);
            }
            window.removeEventListener('resize', onWindowResize);
            cornerstone.disable(element);
        };
    }, []);

    const onImageRendered = () => {
        const element = viewerRef.current;
        if (element) {
            const viewport = cornerstone.getViewport(element);
            setViewport(viewport);
        }
    };


    const onWindowResize = () => {
        const element = viewerRef.current;
        if (element) {
            cornerstone.resize(element);
        }
    };

    return (
        <div
            ref={viewerRef}
            style={{
                width: '512px',
                height: '512px',
                position: 'relative',
                color: 'white'
            }}
        >
            <div style={{bottom: '5px', left: '5px', position: 'absolute', color: 'white'}}>
                Zoom: {viewport.scale}
            </div>
            <div style={{bottom: '5px', right: '5px', position: 'absolute', color: 'white'}}>
                WW/WC: {viewport.voi?.windowWidth} / {viewport.voi?.windowCenter}
            </div>
        </div>
    );
};

export default DicomImageViewer;
