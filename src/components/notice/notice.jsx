import close from './../../assets/img/close.svg';

import styles from './notice.module.css';

const Notice = ({text, date, img}) => {
    return (
        <div className={styles.cart}>
            <div className={styles.img}>
                <img src={close}/>
            </div>
            <div className="flex flex-hc">
                <img src={img}/>
                <div className={styles.text}>
                    <div className={styles.h4}>{text}</div>
                    <div className={styles.p}>{date}</div>
                </div>
            </div>
        </div>
    );
};

export default Notice;
