import heart from './../../assets/img/heart.svg';

import styles from './idea.module.css';

const Idea = ({ img, like, name, date, text }) => {
    return (
        <div>
            <div className="flex flex-sb aling-start">
                <div className={styles.user}>
                    <img className={styles.img} src={img} />
                    <div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.date}>{date}</div>
                    </div>
                </div>
                <div className={styles.text}>{text}</div>
                <div className="flex flex-hc">
                    <img src={heart} />
                    <div className={styles.like_item}>{like}</div>
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
    );
};

export default Idea;