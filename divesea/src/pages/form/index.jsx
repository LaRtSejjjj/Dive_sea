import download from './../../assets/img/download.svg';

import Select from '../../components/select/select';
import Button from '../../components/button/button';
import Banner from '../../components/banner/banner';
import Input from '../../components/input/input';
import Title from '../../components/title/title';

import styles from './form.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEvents } from '../../redux/eventsSlice/eventsSlice';

const Form = () => {
    const [events, setEvent] = useState({
        title: '',
        description: '',
        tag: '',
        money: ''
    });
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sendData = () => {
      if (!(events.title && events.description && events.tag && events.money)) {
        setErr('Заполните все поля!');
      } else {
        setErr('');
        navigate('/account');
        dispatch(setEvents([...events]));
      }
    };
    console.log(events);
    return (
        <div className={styles.wrapper}>
            <Title title="Создать мероприятие" />
            <div className="flex flex-sb flex-hc aling-start">
                <div className={styles.form}>
                    <div className={styles.input}>
                        <Input
                            name="Название"
                            placeholder="Введите название"
                            value={events}
                            keyName={'title'}
                            setValue={setEvent}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            name="Описание"
                            placeholder="Введите описание"
                            value={events}
                            keyName={'description'}
                            setValue={setEvent}
                        />
                    </div>
                    <div className="flex flex-sb flex-hc">
                        <div className={styles.date}>
                            <div className={styles.p}>Дата</div>
                            <Select placeholder="20.04.2024" />
                        </div>
                        <div className={styles.time}>
                            <div className={styles.p}>Время</div>
                            <div className={styles.text}>
                                <Select placeholder="Начало" />
                                <Select placeholder="Конец" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <Input
                            name="Теги"
                            placeholder="Введите тег"
                            value={events}
                            keyName={'tag'}
                            setValue={setEvent}
                        />
                    </div>
                    <div className="flex flex-sb flex-hc">
                        <div className={styles.div}>
                            <label htmlFor="ticket" className={styles.p}>
                                Билеты
                            </label>
                            <div className={styles.ticket}>
                                <Select placeholder="Формат" />
                                <input 
                                value={events.money}
                                type={'money'} 
                                placeholder="500" 
                                className={styles.money}
                                onChange={(e) => setEvent({ ...events, money: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={styles.input}>
                            <div className={styles.p}>Формат</div>
                            <div className={styles.text}>
                                <Select placeholder="Формат" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-sb flex-hc aling-end">
                        <div className={styles.program}>
                            <Input
                                name="Зарезервировать место"
                                placeholder="Выберите место проведения "
                            />
                        </div>
                        <div className={styles.button}>
                            <Button button="Зарезервировать" />
                        </div>
                    </div>
                    <div className="flex flex-sb flex-hc aling-end">
                        <div className={styles.program}>
                            <Input
                                name="Пригласить спикера "
                                placeholder="Выберите спикера "
                            />
                        </div>
                        <div className={styles.button}>
                            <Button button="Пригласить" />
                        </div>
                    </div>
                    <div className="flex flex-sb flex-hc aling-end">
                        <div className={styles.program}>
                            <Input
                                name="Программа"
                                placeholder="Выберите файл"
                            />
                        </div>
                        <div className={styles.button}>
                            <Button button="Загрузить" />
                        </div>
                    </div>
                    <div className={styles.creat}>
                        <div className={styles.error}>{err}</div>
                        <Button button="Создать"  onClick={sendData}/>
                    </div>
                </div>
                <div className={styles.banner}>
                    <Banner download={download} text="PNG, GIF, WEBP, MP4 or MP3. Max 1Gb." />
                    <div className={styles.download}>
                        <Button button="Загрузить" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;