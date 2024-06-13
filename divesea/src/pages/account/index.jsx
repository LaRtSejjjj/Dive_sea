import { Link } from 'react-router-dom';
import Cart from '../../components/cart/cart';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';

import styles from './account.module.css';
import { useState } from 'react';

const Account = () => {
    const [activeTab, setActiveTab] = useState("organizer");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.fon}>
                <div className={styles.div}>
                    <div className={styles.img}></div>
                </div>
            </div>
            <div className="flex flex-sb aling-start">
                <div className={styles.description}>
                    <div className="flex flex-sb flex-hc">
                        <div>
                            <div className={styles.h1}>Larts</div>
                            <Description description="Дизайнер, блогер" />
                        </div>
                        <Link to='/form' className={styles.link}>Создать мероприятие</Link>
                    </div>
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
                        <div className={activeTab === "organizer" ? styles.active : styles.menu}
                            onClick={() => handleTabClick("organizer")}>Организатор</div>
                        <div className={activeTab === "guest" ? styles.active : styles.menu}
                            onClick={() => handleTabClick("guest")}>Гость</div>
                    </div>
                    {activeTab === "organizer" ?
                        <div className={styles.cart}>
                            <Cart poster="https://i.pinimg.com/564x/c3/52/6a/c3526a0b8a8bb4aad2d2ab24a1df95dd.jpg"
                                quantity="200" text="Sun-Glass" />
                            <Cart poster="https://i.pinimg.com/564x/0e/f0/51/0ef0515efc9a865d9dceb55141085d8f.jpg"
                                quantity="200" text="Sun-Glass" />
                        </div>
                        :
                        <div className={styles.cart}>
                            <Cart poster="https://i.pinimg.com/736x/7b/7d/b1/7b7db111443858199ce2494b59d2e0a3.jpg"
                                quantity="200" text="Sun-Glass" />
                            <Cart poster="https://i.pinimg.com/564x/6a/94/1d/6a941d5672e580706178319cc69d6151.jpg"
                                quantity="200" text="Sun-Glass" />
                            <Cart poster="https://i.pinimg.com/564x/5e/fe/b4/5efeb4c5ebef5c47c8ddbfabe627ad53.jpg"
                                quantity="200" text="Sun-Glass" />
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Account;