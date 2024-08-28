import React, {useEffect, useRef, useState} from 'react';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';
import {useAtom} from 'jotai';
import {toolStateAtom} from "../../jotai/atoms.tsx";
import styles from './DicomImageViewer.module.css';

const DICOM_IMAGE_ID = 'http://localhost:5173/example.dcm';


const DicomImageViewer = () => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState(cornerstone.getDefaultViewport(null, undefined));
    const [, setToolState] = useAtom(toolStateAtom);
    const [isRectangleRoiActive, setIsRectangleRoiActive] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(0);


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
        cornerstoneTools.init([
            {
                moduleName: 'globalConfiguration',
                configuration: {
                    showSVGCursors: true,
                },
            },
            {
                moduleName: 'segmentation',
                configuration: {
                    outlineWidth: 2,
                },
            },
        ]);
        cornerstone.enable(element);

        const loadImage = async () => {
            try {
                await cornerstone.loadAndCacheImage(`wadouri:${DICOM_IMAGE_ID}`).then((image) => {
                    cornerstone.displayImage(element, image);
                    onImageRendered();
                    const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
                    cornerstoneTools.addTool(RectangleRoiTool);
                    cornerstoneTools.setToolActive('RectangleRoi', {
                        mouseButtonMask: 1,
                    })

                    const PanTool = cornerstoneTools.PanTool;

                    cornerstoneTools.addTool(PanTool);
                    cornerstoneTools.setToolActive('Pan', {
                        mouseButtonMask: 4,
                    })

                    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;
                    const updateToolStateLength = () => {
                        const value = cornerstoneTools.getToolState(element, 'RectangleRoi');
                        setTimeout(() => {
                            setToolState(
                                value.data.map((item: any) => {
                                    return item;
                                })
                            );
                        }, 1000); // for cached tool state
                    };

                    const updateToolStateZoom = () => {
                        const viewport = cornerstone.getViewport(element);
                        setZoomLevel(viewport.scale);
                    };


                    element.addEventListener(cornerstoneTools.EVENTS.MEASUREMENT_ADDED, updateToolStateLength);
                    element.addEventListener(cornerstoneTools.EVENTS.MOUSE_WHEEL, updateToolStateZoom);
                    element.addEventListener(cornerstoneTools.EVENTS.MOUSE_DRAG, updateToolStateZoom);

                    cornerstoneTools.addTool(ZoomMouseWheelTool)
                    cornerstoneTools.setToolActive('ZoomMouseWheel', {mouseButtonMask: 4})


                });
            } catch (error) {
                console.error('Error loading DICOM image:', error);
            }
        };

        loadImage().then();

        return () => {
            cornerstone.disable(element);
            cornerstoneTools.removeTool(cornerstoneTools.RectangleRoiTool);
            cornerstoneTools.removeTool(cornerstoneTools.PanTool);
            cornerstoneTools.removeTool(cornerstoneTools.ZoomMouseWheelTool);
        };
    }, []);

    const handleToggleRectangleRoiTool = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const element = viewerRef.current;
        if (element) {

            if (isRectangleRoiActive) {
                cornerstoneTools.setToolPassive('RectangleRoi');
                setIsRectangleRoiActive(false);
            } else {
                cornerstoneTools.setToolActive('RectangleRoi', {
                    mouseButtonMask: 1,
                });
                setIsRectangleRoiActive(true);
            }
            cornerstone.updateImage(element);
        }
    };

    const onImageRendered = () => {
        const element = viewerRef.current;
        if (element) {
            const viewport = cornerstone.getViewport(element);
            setViewport(viewport);
        }
        if (!element) {
            return;
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
            }}
        >
            <div className={styles.buttonContainer}>
                <button onClick={(e) => handleToggleRectangleRoiTool(e)} className={`${styles.rectangleRoiToolButton} ${
                    isRectangleRoiActive ? styles.active : styles.inactive
                }`}>
                    {isRectangleRoiActive ? ' Rectangle ROI: Active' : 'Rectangle ROI : Inactive'}
                </button>
            </div>
            <div
                ref={viewerRef}
                style={{
                    width: '100%',
                    height: '90%',
                    position: 'relative',
                    color: 'white'
                }}
            >

                <div style={{bottom: '5px', left: '5px', position: 'absolute', color: 'white'}}>
                    Zoom: {zoomLevel}
                </div>
                <div style={{bottom: '5px', right: '5px', position: 'absolute', color: 'white'}}>
                    WW/WC: {viewport.voi?.windowWidth} / {viewport.voi?.windowCenter}
                </div>
            </div>
        </div>
    );
};

export default DicomImageViewer;
