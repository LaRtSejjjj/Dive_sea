import { Link } from 'react-router-dom';
import people from './../../assets/img/people.svg';

import styles from './cart.module.css';
import Waiting from '../waiting/waiting';

const Cart = ({ poster, quantity, text, link, button, blok }) => {
    return (
        <div className={styles.cart}>
            <div className={styles.div}>
                <Link to={link} className={styles.link}>
                {blok &&
                <div className={styles.waiting}>{blok}</div>
                }
                    <img src={poster} className={styles.img} />
                    <div className={styles.text}>{text}</div>
                </Link>
                <div className={styles.people}>
                    <div className="flex flex-sb flex-hc">
                        <img src={people} />
                        <p className={styles.p}>{quantity}</p>
                    </div>
                    <button className={styles.button}>{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
