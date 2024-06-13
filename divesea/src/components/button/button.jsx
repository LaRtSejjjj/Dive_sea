import styles from './button.module.css';

const Button = ({ button, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick ? onClick : () => true}>
      {button}
    </button>
  );
};

export default Button;
