import blackbell from './../../assets/img/blackbell.svg';

import Notice from '../../components/notice/notice';

import styles from './notifications.module.css';

const Notifications = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <div className={styles.notifications + ' ' + (isOpen ? styles.show : styles.hidden)}>
      <Notice className={styles.notice} 
      img={blackbell}
      text='Уже завтра в 13:00 начало  “Название”! Не пропусти!'
      date='May 17, 2022 at 12:08'
      />
    </div>
  );
};

export default Notifications;
