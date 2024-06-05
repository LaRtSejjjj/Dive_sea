
import styles from './numbers.module.css';

const Numbers = ({number, text}) => {
    return (
        <div>
            <div className={styles.h1}>{number}</div>
            <div className={styles.p}>{text}</div>
        </div>
    );
};

export default Numbers;
