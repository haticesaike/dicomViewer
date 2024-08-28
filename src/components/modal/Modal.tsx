import React from 'react';
import styles from './Modal.module.css';
import {IoClose} from "react-icons/io5";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.text}>
                    <span className={styles.title}>Annotation</span>
                    {children}
                </div>
                <div>
                    <button className={styles.closeButton} onClick={onClose}>
                        <IoClose/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Modal;
