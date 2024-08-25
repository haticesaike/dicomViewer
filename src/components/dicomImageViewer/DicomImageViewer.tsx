import React, {useEffect, useRef} from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import cornerstoneWebImageLoader from 'cornerstone-web-image-loader';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import Hammer from 'hammerjs';

const DICOM_IMAGE_ID = 'https://marketing.webassets.siemens-healthineers.com/1800000004192212/b89f182dc68a/v/7737adc3758d/pediatric-phoenix-images-for-magnetom-skyra-brain_swi_tra_p2_448_1800000004192212.jpg';

const DicomImageViewer: React.FC = () => {
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!viewerRef.current) {
            return;
        }

        cornerstoneTools.external.cornerstone = cornerstone;
        cornerstoneWebImageLoader.external.cornerstone = cornerstone;
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        cornerstoneTools.external.Hammer = Hammer;
        cornerstoneTools.init();

        cornerstone.enable(viewerRef.current);

        cornerstone.loadAndCacheImage(DICOM_IMAGE_ID).then((image) => {
            cornerstone.displayImage(viewerRef.current, image);
        }).catch((error) => {
            console.error('Error loading DICOM image:', error);
        });

        return () => {
        };
    }, []);

    return (
        <div
            ref={viewerRef}
            style={{
                width: '512px',
                height: '512px',
                position: 'relative',
            }}
        />
    );
};

export default DicomImageViewer;