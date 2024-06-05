import Cart from '../../components/cart/cart';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';
import poster from './../../assets/img/poster.svg';

import styles from './account.module.css';

const Account = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.fon}>
                <div className={styles.div}>
                    <div className={styles.img}></div>
                </div>
            </div>
            <div className="flex flex-sb aling-start">
                <div className={styles.description}>
                    <div className={styles.h1}>Larts</div>
                    <Description description="Дизайнер, блогер" />
                    <div className={styles.line}></div>
                    <div className="flex flex-sb flex-hc">
                        <Numbers number="4" text="Мероприятия" />
                        <div className={styles.numbers}>
                            <Numbers number="12K" text="Выступил" />
                            <Numbers number="587" text="Посетил" />
                        </div>
                    </div>
                    <Description title="О себе" description="ФИО: Гарри Поттер Джеймсович" />
                    <Description description="Возраст: 25лет" />
                    <Description description="the artist who transforms the intangible into priceless assets with their incredible NFT creations. From stunning visuals to mind-bending concepts" />
                    <Description title="Опыт работы: 5 лет" description="the artist who transforms the intangible into priceless assets with their incredible NFT creations. From stunning visuals to mind-bending concepts" />
                    <div className={styles.line}></div>
                    <Description description="8(999)999-99-99" />
                    <Description description="harry@mail.ru" />
                </div>
                <div className={styles.events}>
                    <div className="flex aling-start">
                        <div className={styles.active}>Организатор</div>
                        <div className={styles.menu}>Гость</div>
                    </div>
                    <div className={styles.cart}>
                        <Cart poster={poster} quantity="200" text="Sun-Glass" />
                        <Cart poster={poster} quantity="200" text="Sun-Glass" />
                        <Cart poster={poster} quantity="200" text="Sun-Glass" />
                        <Cart poster={poster} quantity="200" text="Sun-Glass" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;