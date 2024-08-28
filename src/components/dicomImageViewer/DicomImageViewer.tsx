import React, {useEffect, useRef, useState} from 'react';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';
import {useAtom} from 'jotai'
import {toolStateAtom} from "../../jotai/atoms.tsx";

const DICOM_IMAGE_ID = 'http://localhost:5173/example.dcm';


const DicomImageViewer = () => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState(cornerstone.getDefaultViewport(null, undefined));
    const [, setToolState] = useAtom(toolStateAtom)


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
                    cornerstoneTools.addTool(RectangleRoiTool)
                    cornerstoneTools.setToolActive('RectangleRoi', {
                        mouseButtonMask: 1,
                    })

                    const PanTool = cornerstoneTools.PanTool;

                    cornerstoneTools.addTool(PanTool)
                    cornerstoneTools.setToolActive('Pan', {
                        mouseButtonMask: 4,
                    })

                    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;

                    const updateToolStateLength = () => {
                        const value = cornerstoneTools.getToolState(element, 'RectangleRoi');
                        setTimeout(() => {
                            setToolState(
                                value.data.map((item: any) => {
                                    return item
                                })
                                // for cached tool state
                            );
                        }, 1000)
                    };

                    element.addEventListener(cornerstoneTools.EVENTS.MEASUREMENT_ADDED, updateToolStateLength);

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
            cornerstoneTools.removeTool(cornerstoneTools.RectangleRoiTool)
            cornerstoneTools.removeTool(cornerstoneTools.PanTool)
            cornerstoneTools.removeTool(cornerstoneTools.ZoomMouseWheelTool)
        }
    }, []);


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
            ref={viewerRef}
            style={{
                width: '100%',
                height: '100%',
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
