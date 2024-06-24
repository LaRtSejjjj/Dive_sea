
import styles from './text.module.css';

const Text = ({text, title, ticket}) => {
    return (
        <div>
            <div className={styles.text}>{title}</div>
            <div className='flex'>
            <div className={styles.p}>{text}</div>
            <div className={styles.p}>{ticket}</div>
            </div>
        </div>
    );
};

export default Text;
