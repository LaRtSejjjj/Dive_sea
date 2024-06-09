
import styles from './speakerback.module.css';

const SpeakerBack = ({title, text}) => {
    return (
        <div className={styles.speaker}>
            <div className={styles.div}>
                <div className={styles.title}>{title}</div>
                <div className={styles.line}></div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default SpeakerBack;
