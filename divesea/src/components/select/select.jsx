import styles from './select.module.css';

const Select = ({ items, options }) => {
  return (
    <div>
      <select className={styles.select}>
        {options &&
          options.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
