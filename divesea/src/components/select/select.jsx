import styles from './select.module.css';

const Select = ({ selec, placeholder }) => {
    let select = [];
    return (
        <div>
            <select className={styles.select} >
                {select}
            </select>
        </div>
    );
};

export default Select;
