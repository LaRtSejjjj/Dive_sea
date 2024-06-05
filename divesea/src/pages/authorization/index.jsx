import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';

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
        <div className={styles.input}>
          <Input name="Пароль" placeholder="Введите пароль" />
        </div>
        <div className={styles.select}>
          <div className={styles.p}>Роль</div>
          <Select placeholder="Выберете роль" select="Участник"/>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
