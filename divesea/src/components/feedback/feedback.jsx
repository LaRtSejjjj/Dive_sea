import stars from './../../assets/img/stars.svg';

import styles from './feedback.module.css';

const Feedback = ({img, text, name}) => {
    return (
        <div className="flex flex-hc">
            <div className={styles.cart}>
                <div className="flex aling-start">
                    <img className={styles.img} src={img}/>
                    <div>
                        <div className={styles.name}>{name}</div>
                        <p className={styles.input}> {text}</p>
                    </div>
                    
                </div>
                <div className={styles.nostars}>
                    <img src={stars} />
                </div>
            </div>
        </div>
    );
};

export default Feedback;