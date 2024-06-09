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
          <Input name="Email" placeholder="Введите email" />
        </div>
        <div className={styles.input}>
          <Input name="Пароль" placeholder="Введите пароль" />
        </div>
      </form>
      <Button button="Вход"/>
      <div className={styles.button}>
        <Button button="Зарегистрироваться"/>
      </div>
    </div>
  );
};

export default Authorization;
