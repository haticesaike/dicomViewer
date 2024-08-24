import React from 'react';
import styles from './ImageHeader.module.css';
import {IoIosCheckmarkCircle} from "react-icons/io";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {IoMdInformationCircleOutline} from "react-icons/io";


const ImageHeader: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <IoIosCheckmarkCircle className={styles.CheckmarkIcon}/>
                        <div className={styles.verticalLine}></div>
                        <div>26-Oct-2015</div>
                        <div className={styles.verticalLine}></div>
                        <div>Chest 3x3 Soft</div>
                    </div>
                    <div className={styles.icons}>
                        <MdOutlineKeyboardArrowLeft className={styles.icon}/>
                        <MdOutlineKeyboardArrowRight className={styles.icon}/>
                        <IoMdInformationCircleOutline className={styles.icon}/>


                    </div>
                </div>
                <div className={styles.dicomInfo}>
                    <div className={styles.dicomWindow}>
                        <div className={styles.windowWith}>W: 360</div>
                        <div className={styles.windowLevel}>L:36</div>
                    </div>
                    <div className={styles.dicomInstance}>I: 1/1</div>
                </div>
            </div>

        </div>
    )
};

export default ImageHeader