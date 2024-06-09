import Cart from '../../components/cart/cart';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';

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
                        <Cart poster="https://i.pinimg.com/564x/c3/52/6a/c3526a0b8a8bb4aad2d2ab24a1df95dd.jpg"
                            quantity="200" text="Sun-Glass" />
                        <Cart poster="https://i.pinimg.com/564x/0e/f0/51/0ef0515efc9a865d9dceb55141085d8f.jpg"
                            quantity="200" text="Sun-Glass" />
                        <Cart poster="https://i.pinimg.com/564x/68/40/50/684050e33b5cd9435c2626b93e21ab39.jpg"
                            quantity="200" text="Sun-Glass" />
                        <Cart poster="https://i.pinimg.com/564x/24/be/72/24be7265ab87bbb9a83525d6240f1920.jpg"
                            quantity="200" text="Sun-Glass" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;