import { Link } from 'react-router-dom';
import logo from './../../assets/img/black-logo.svg';
import bell from './../../assets/img/bell.svg';
import magnifier from './../../assets/img/magnifier.svg';
import photo from './../../assets/img/photo.svg';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="flex flex-sb flex-hc wrapper">
                <div className="flex flex-sb flex-hc">
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="" />
                    </Link>
                    <div className={styles.menu}>
                        <div className={styles.menu__item}>О НАС</div>
                        <div className={styles.menu__item}>ЗАЯВКИ</div>
                        <div className={styles.menu__item}>ЧАТ</div>
                    </div>
                </div>
                <div className="flex flex-sb flex-hc">
                    <div className={styles.search}>
                        <img src={magnifier} alt="" />
                        <input type="text" id="search" placeholder="Название мероприятия" className={styles.input} />
                    </div>
                    <img src={photo} className={styles.img} alt="" />
                    <img src={bell} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;