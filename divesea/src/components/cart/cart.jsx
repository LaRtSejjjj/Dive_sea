import { Link } from 'react-router-dom';
import people from './../../assets/img/people.svg';

import styles from './cart.module.css';

const Cart = ({poster, quantity, text, link}) => {
    return (
        <div className={styles.cart}>
            <div className={styles.div}>
                <img src={poster} className={styles.img} />
                <div className={styles.text}>{text}</div>
                <div className={styles.people}>
                    <div className="flex flex-sb flex-hc">
                        <img src={people} />
                        <p className={styles.p}>{quantity}</p>
                    </div>
                    <Link to={link} className={styles.button}>ПОСЕТИТЬ</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
