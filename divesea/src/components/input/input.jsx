import styles from './input.module.css';

const Input = ({ name, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <input type="text" id={name} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Input;
