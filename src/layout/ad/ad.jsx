import { Link } from 'react-router-dom';
import styles from './ad.module.css';

const Ad = ({ download, text }) => {
    return (
        <div className={styles.ad}>
            <p>
                Хочешь меро?
                <Link to='/form' className={styles.link}>Тогда создай его!</Link>
            </p>
        </div>
    );
};

export default Ad;
