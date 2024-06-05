import styles from './select.module.css';

const Select = ({ select, placeholder }) => {
    return (
        <div>
            <select className={styles.select} >
                <option value={placeholder} className={styles.option} selected="selected">{placeholder}</option>
                <option value={select} className={styles.option}>{select}</option>
            </select>
        </div>
    );
};

export default Select;
