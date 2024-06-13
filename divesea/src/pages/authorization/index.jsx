import Input from '../../components/input/input';
import Title from '../../components/title/title';
import Button from '../../components/button/button';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './authorization.module.css';

const Authorization = () => {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const handleBtnClick = () => {
    if (user.email === data.email && user.password === data.password) {
      navigate('/');
    } else {
      setErr('Данные введены неправильно!');
    }
  };
  console.log(user);
  return (
    <div className={styles.wrapper}>
      <Title title="Авторизация" />
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            name="Email"
            placeholder="Введите email"
            value={data}
            keyName="email"
            setValue={setData}
          />
        </div>
        <div className={styles.input}>
          <Input
            name="Пароль"
            placeholder="Введите пароль"
            type="password"
            value={data}
            keyName="password"
            setValue={setData}
          />
        </div>
      </form>
      <div className={styles.error}>{err}</div>
      <Button button="Вход" onClick={handleBtnClick} />
      <Link to={'/registration'} className={styles.button}>
        <Button button="Зарегистрироваться" />
      </Link>
    </div>
  );
};

export default Authorization;
