

import styles from './banner.module.css';

const Banner = ({ download, text }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.div}>
                <div className={styles.img}>
                    <img src={download} />
                </div>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Banner;
