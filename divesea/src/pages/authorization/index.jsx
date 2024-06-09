import Input from '../../components/input/input';
import Title from '../../components/title/title';
import Button from '../../components/button/button';

import styles from './authorization.module.css';

const Authorization = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Авторизация" />
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
      <Button button="Вход"/>
    </div>
  );
};

export default Authorization;
