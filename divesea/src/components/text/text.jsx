
import styles from './text.module.css';

const Text = ({text, title}) => {
    return (
        <div>
            <div className={styles.text}>{title}</div>
            <div className={styles.p}>{text}</div>
        </div>
    );
};

export default Text;
