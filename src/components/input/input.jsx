import pen from './../../assets/img/pen.svg';

import styles from './input.module.css';

const Input = ({ name, placeholder, value, setValue, keyName, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <div className={styles.div}>
        {keyName ? (
          <input
            id={name}
            type={type}
            value={value[keyName]}
            onChange={(e) => setValue({ ...value, [keyName]: e.target.value })}
            placeholder={placeholder}
            className={styles.input}
          />
        ) : (
          <input
            type={type}
            id={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
          />
        )}
        <img src={pen} />
      </div>
    </div>
  );
};

export default Input;
