
import styles from './tag.module.css';

const Tag = ({ tag}) => {
    return (
        <div>
            <div className={styles.tag}>{tag}</div>
        </div>
    );
};

export default Tag;
