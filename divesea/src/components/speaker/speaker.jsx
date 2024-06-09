import heart from './../../assets/img/heart.svg';

import styles from './speaker.module.css';

const Speaker = ({role, quantity, name, img}) => {
    return (
        <div className={styles.speaker}>
            <div className={styles.div}>
                <img src={img} className={styles.img} />
                <div className={styles.role}>{role}</div>
                <div className={styles.name}>{name}</div>
                <div className="flex flex-hc">
                    <img src={heart} />
                    <p className={styles.p}>{quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Speaker;
