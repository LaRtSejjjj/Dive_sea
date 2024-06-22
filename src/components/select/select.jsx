import styles from './select.module.css';

const Select = ({ items, options, value, setValue }) => {
  return (
    <div>
      <select className={styles.select} value={value} onChange={(e) => setValue(e.target.value)}>
        {options &&
          options.map((item, i) => (
            <option key={i} value={item} className={styles.option}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
