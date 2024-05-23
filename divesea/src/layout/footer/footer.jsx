import { Link } from 'react-router-dom';
import logo from './../../assets/img/white-logo.svg';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="flex flex-sb flex-hc wrapper">
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={styles.menu}>
          <div className={styles.menu__item}>Privacy Policy</div>
          <div className={styles.menu__item}>Term & Conditions</div>
          <div className={styles.menu__item}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
