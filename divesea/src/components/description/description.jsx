
import styles from './description.module.css';

const Description = ({ title, description }) => {
    return (
        <div>
            <div className={styles.h1}>
                {title}
            </div>
            <div className={styles.div}>
                {description}
            </div>
        </div>
    );
};

export default Description;
