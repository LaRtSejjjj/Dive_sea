import heart from './../../assets/img/heart.svg';

import styles from './speaker.module.css';

const Speaker = ({role, quantity, name}) => {
    return (
        <div className={styles.speaker}>
            <div className={styles.div}>
                <img src="https://i.pinimg.com/originals/a7/4d/ed/a74ded8b3868396d05fde493923ddae0.png" className={styles.img} />
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
