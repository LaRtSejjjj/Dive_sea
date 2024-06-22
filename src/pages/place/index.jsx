import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-date-picker';

import { setEvents } from '../../redux/eventsSlice/eventsSlice';

import Button from '../../components/button/button';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';
import Select from '../../components/select/select';
import Tag from '../../components/tag/tag';
import Text from '../../components/text/text';
import Title from '../../components/title/title';
import SliderPlace from './slider/slider';

import styles from './place.module.css';

const Place = () => {
  const events = useSelector((state) => state.events.events);
  const [event, setEvent] = useState(events);
  const [date, setDate] = useState();
  const [hall, setHall] = useState('Квазар');
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [hallsList] = useState([
    {
      name: 'Квазар',
      places: 100,
      have: ['Микрофон', 'Проектор'],
      price: '10 000',
      id: 0,
    },
    {
      name: 'Нарния',
      places: 50,
      have: ['Микрофон', 'Проектор', 'Кликер'],
      price: '100 000',
      id: 1,
    },
    {
      name: 'Пульсар',
      places: 1,
      have: ['Микрофон', 'Проектор'],
      price: '5 000',
      id: 2,
    },
  ]);
  const sendData = () => {
    if (!(event.date && event.timeStart && event.timeEnd)) {
      setErr('Выберете время и дату!');
    } else {
      setIsOpen(true);
      setErr('');
      dispatch(setEvents(event));
    }
  };
  useEffect(() => {
    dispatch(setEvents(event));
  }, [event]);
  useEffect(() => {
    setEvent({ ...event, date: new Date(date).toLocaleString().substring(0, 10), hall });
  }, [date]);

  console.log(events);
  return (
    <div className={styles.wrapper + ' ' + styles.relative}>
      {isOpen && <div className={styles.bg}></div>}
      <SliderPlace />

      <div className={'flex flex-sb aling-start'}>
        {isOpen && (
          <div className={styles.modal__wrapper}>
            <div className={styles.modal}>
              <div className={styles.modal__title}>Ваша заявка отправлена</div>
              <div className={styles.modal__subtitle}>
                Вернитесь назад и продолжите заполнение формы
              </div>
              <Link to="/form" className={styles.modal__btn}>
                <Button button="Продолжить" />
              </Link>
            </div>
          </div>
        )}

        <div className={styles.description}>
          <Title title="Хайпарк ГГНТУ" />
          <div className={styles.line}></div>
          <div className="flex flex-sb flex-hc">
            <Numbers number="4" text="Мероприятия" />
          </div>
          <Description title="Адрес" description="г.Грозный, пр.Х.Исаева д.100" />
          <Description description="Парк высоких технологий «Хайпарк Грозненского государственного нефтяного технического университета» был открыт в феврале 2019 года. Цель создания подобной площадки заключалась в поддержке инновационного предпринимательства путем формирования материально-технической, социально-культурной, финансовой и сервисной базы, где директор Хайпарка Арсанукаев Мансур подобро рассказывает о деятельности парка!" />
          <Description title="Опыт работы: 10 лет" />
          <div className={styles.line}></div>
          <Description description="8(999)999-99-99" />
          <Description description="harry@mail.ru" />
        </div>
        <div className={styles.place}>
          <div className={styles.p}>Выбрать зал</div>
          <Select
            placeholder="Зал 1"
            options={['Квазар', 'Нарния', 'Пульсар', 'Гаргантьюа']}
            value={hall}
            setValue={setHall}
          />
          <Text
            title="Количество мест"
            text={`до ${hallsList.filter(({ name }) => name === hall)[0].places} мест`}
          />
          <div className={styles.text}>В наличии </div>
          <div className={styles.tag}>
            {hallsList
              .filter(({ name }) => name === hall)[0]
              .have.map((item) => (
                <Tag tag={item} />
              ))}
          </div>
          <div className="flex flex-sb aling-start">
            <div className={styles.creat}>
              <div className={styles.p}>Дата</div>
              <DatePicker className={styles.data} onChange={setDate} value={date} />
            </div>
            <div className={styles.creat}>
              <div className={styles.p}>Время</div>
              <div className={styles.div_time}>
                <input
                  className={styles.time}
                  value={event.timeStart}
                  type={'time'}
                  placeholder="Выберите файл"
                  onChange={(e) => setEvent({ ...event, timeStart: e.target.value })}
                />
                <input
                  className={styles.time}
                  value={event.timeEnd}
                  type={'time'}
                  placeholder="Выберите файл"
                  onChange={(e) => setEvent({ ...event, timeEnd: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.price_h1}>Цена</div>
            <div className={styles.price_text}>
              {hallsList.filter(({ name }) => name === hall)[0].price}₽
            </div>
          </div>
          <div className={styles.error}>{err}</div>
          <Button button="Отправить заявку" onClick={sendData} />
        </div>
      </div>
    </div>
  );
};

export default Place;
