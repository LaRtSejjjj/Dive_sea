import Input from '../../components/input/input';
import Title from '../../components/title/title';
import styles from './registration.module.css';

const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Регистрация" />
      <form className={styles.form}>
        <div className={styles.input}>
          <Input name="Имя" placeholder="Введите имя" />
        </div>
        <div className={styles.input}>
          <Input name="Номер телефона" placeholder="Введите номер телефона" />
        </div>
        <div className={styles.input}>
          <Input name="Email" placeholder="email" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
