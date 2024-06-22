import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/authSlice/authSlice';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Title from '../../components/title/title';

import styles from './registration.module.css';

const Registration = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendData = () => {
    if (!(user.name && user.phone && user.email && user.password)) {
      setErr('Заполните все поля!');
    } else {
      setErr('');
      navigate('/authorization');
      dispatch(setAuth([...user]));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Title title="Регистрация" />
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            name="Имя"
            placeholder="Введите имя"
            value={user}
            keyName={'name'}
            setValue={setUser}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="Номер телефона"
            placeholder="Введите номер телефона"
            value={user}
            keyName={'phone'}
            setValue={setUser}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="Email"
            placeholder="email"
            value={user}
            keyName={'email'}
            setValue={setUser}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="Пароль"
            placeholder="Введите пароль"
            value={user}
            type="password"
            keyName={'password'}
            setValue={setUser}
          />
        </div>
        {/* <div className={styles.select}>
          <div className={styles.p}>Роль</div>
          <Select
            placeholder="Выберете роль"
            select="Участник"
            value={user.name}
            type={'role'}
            setValue={setUser}
          />
        </div> */}
        <div className={styles.error}>{err}</div>
      </form>
      <Button button="Зарегистрироваться" onClick={sendData} />
      <div className={styles.button}>
        <Button button="Войти" />
      </div>
    </div>
  );
};

export default Registration;
