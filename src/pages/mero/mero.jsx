import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../components/button/button';
import Tag from '../../components/tag/tag';
import Description from '../../components/description/description';
import Text from '../../components/text/text';
import Speaker from '../../components/speaker/speaker';
import SpeakerBack from '../../components/speakerback/speakerback';
import Comments from '../../components/comments/comments';
import Feedback from '../../components/feedback/feedback';

import photo from './../../assets/img/photo.svg';
import arrow from './../../assets/img/arrow.svg';
import stars from './../../assets/img/stars.svg';
import nostars from './../../assets/img/nostars.svg';

import styles from './mero.module.css';



const Mero = () => {
    const events = useSelector((state) => state.events.events);
    const [event, setEvent] = useState(events);
    return (
        <div className={styles.wrapper}>
            <Link to="/" className={styles.arrow}>
                <img src={arrow} />
                Мероприятие
            </Link>
            <div className={styles.cart}>
                <img className={styles.img} src={event.file} />
                <div>
                    <div className={styles.h1}>{event.title}</div>
                    <div className={styles.p}>{event.description}</div>
                    <img src={nostars} />
                    <div className={styles.creat}>
                        <div className="flex aling-center">
                            <img src={photo} />
                            <div className={styles.h2_div}>
                                <div className={styles.h2}>Created by</div>
                                <div className={styles.text}>Larts</div>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <Button button="ПОСЕТИТЬ" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-sb flex-hc">
                <div className={styles.left}>
                    <div className={styles.info}>
                        <div>
                            <Text title="Количество мест" text="До 85 человек" />
                            <Text title="Телефон" text="8(999)999-99-99" />
                        </div>
                        <div>
                            <Text title="Email" text="ssdfd@email.ru" />
                            <Text title="Цена билета" text={event.money} ticket={event.ticket} />
                        </div>
                    </div>
                    <Text title="Tags" />
                    <div className={styles.tag}>
                        <Tag tag={event.tag} />
                        {event.tag1 && <Tag tag={event.tag1} />}
                    </div>
                    <Button button="Программа" />
                </div>
                <div className={styles.left}>
                    <div className={styles.info}>
                        <div>
                            <Text title="Data" text='27.06.2024' />
                            <Text text={`от ${event.timeStart} до ${event.timeEnd}`} />
                        </div>
                        <div>
                            <Text title="Place" text={events.place} />
                            <Text text="г.Грозный, пр.Х.Исаева д.100" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.comments}><Comments /></div>
            </div>
            <div className={styles.speaker_m}>
                <Description title="Спикеры" />
                <div className={styles.speaker}>
                    <div>
                        <Speaker
                            img="https://cdn.culture.ru/images/50d1a385-b002-5621-a976-b3d0c389d262"
                            role="Артистка"
                            name={event.speaker}
                            quantity="32" />
                    </div>
                    <div>
                        <SpeakerBack title="О том как я создал свой бизнес"
                            text="Join Owl Be Yours and HERE , and come ready to mingle. Описание темы."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mero;