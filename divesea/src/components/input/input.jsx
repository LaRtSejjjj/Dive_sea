import pen from './../../assets/img/pen.svg';

import styles from './input.module.css';

const Input = ({ name, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {name}
      </label>
      <div className={styles.div} >
        <input type="text" id={name} placeholder={placeholder} className={styles.input} />
        <img src={pen}/>
      </div>
    </div>
  );
};

export default Input;
