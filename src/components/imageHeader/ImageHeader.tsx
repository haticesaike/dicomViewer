import styles from './ImageHeader.module.css';
import {IoIosCheckmarkCircle} from "react-icons/io";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {IoMdInformationCircleOutline} from "react-icons/io";

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

const ImageHeader = ({patient}: { patient: any }) => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <IoIosCheckmarkCircle className={styles.CheckmarkIcon}/>
                        <div className={styles.verticalLine}></div>
                        <div>{formatDate(patient.startDate)}</div>
                        <div className={styles.verticalLine}></div>
                        <div>{patient.description}</div>
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
                    <div className={styles.dicomInstance}>1/{patient.details.length}</div>
                </div>
            </div>

        </div>
    )
};

export default ImageHeader