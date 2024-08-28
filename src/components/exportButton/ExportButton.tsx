import {Button} from "@mantine/core";
import styles from "../studyItem/StudyItem.module.css";


function ExportButton() {
    return (
        <>
            <Button
                className={styles.button}

                component="a"
                target="_blank"
                rel="noopener noreferrer"

                styles={() => ({
                    root: {
                        backgroundColor: 'var(--black)',
                        color: 'var(--white)',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        display: 'flex',
                        width: 'fit-content',
                        height: '2.5rem',
                        alignItems: 'center',
                        border: '3px solid var(--blue-light)',

                    },
                })}
            >
                <div className={styles.buttonContent}>
                    <span>Export</span>
                </div>
            </Button>
        </>
    );
}

export default ExportButton;