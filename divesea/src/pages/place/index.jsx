import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';
import Select from '../../components/select/select';
import Tag from '../../components/tag/tag';
import Text from '../../components/text/text';
import Title from '../../components/title/title';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './place.module.css';
import DatePicker from 'react-date-picker';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents } from '../../redux/eventsSlice/eventsSlice';

const Place = () => {
  const events = useSelector((state) => state.events.events);
  const [event, setEvent] = useState(events);
  const [date, setDate] = useState();
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendData = () => {
    if (!(event.date && event.timeStart && event.timeEnd)) {
      setErr('Выберете время и дату!');
    } else {
      setErr('');
      navigate('/form');
      dispatch(setEvents(event));
    }
  };
  useEffect(() => {
    dispatch(setEvents(event));
  }, [event]);
  useEffect(() => {
    setEvent({ ...event, date: new Date(date).toLocaleString().substring(0, 10) });
  }, [date]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(events);
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
      <Slider {...settings}>
        <div className={styles.img_div}>
          <img className={styles.img} src='https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG' alt=''/>
        </div>
        <div className={styles.img_div}>
        <img className={styles.img} src='https://avatars.mds.yandex.net/get-altay/4303820/2a000001790e19c3783cbecc72b04b20250c/XXXL' alt=''/>
        </div>
        <div className={styles.img_div}>
        <img className={styles.img} src='https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG' alt=''/>
        </div>
        <div className={styles.img_div}>
        <img className={styles.img} src='https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG' alt=''/>
        </div>
        <div className={styles.img_div}>
        <img className={styles.img} src='https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG' alt=''/>
        </div>
      </Slider>
      </div>
      <div className="flex flex-sb aling-start">
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
          options={['Квазар', 'Нарния', 'Пульсар','Гаргантьюа']}
          
          />
          <Text title="Количество мест" text="до 100 мест" />
          <div className={styles.text}>В наличии </div>
          <div className={styles.tag}>
            <Tag tag="Микрофон" />
            <Tag tag="Проектор" />
            <Tag tag="Презентер" />
            <Tag tag="Интерактивная доска" />
          </div>
          <div className="flex flex-sb aling-start">
            <div className={styles.creat}>
              <div className={styles.p}>Дата</div>
              <DatePicker
              className={styles.data}
                onChange={setDate}
                value={date}
              />
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
            <div className={styles.price_text}>10 000₽</div>
          </div>
          <div className={styles.error}>{err}</div>
            <Button button="Отправить заявку" onClick={sendData} />
        </div>
      </div>
    </div>
  );
};

export default Place;
