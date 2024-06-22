import styles from './notifications.module.css';

const Notifications = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <div className={styles.notifications + ' ' + (isOpen ? styles.show : styles.hidden)}></div>
  );
};

export default Notifications;
