import emoji from './../../assets/img/emoji.svg';
import nostars from './../../assets/img/nostars.svg';
import send from './../../assets/img/send.svg';

import styles from './comments.module.css';

const Comments = () => {
    return (
        <div className="flex flex-hc">
            <div className={styles.cart}>
                <div className="flex aling-start">
                    <img src={emoji} />
                    <textarea type="text" placeholder="Комментарий" className={styles.input} />
                </div>
                <div className={styles.nostars}>
                    <img src={nostars} />
                </div>
            </div>
            <div className={styles.button}>
                <img src={send}/>
            </div>
        </div>
    );
};

export default Comments;
