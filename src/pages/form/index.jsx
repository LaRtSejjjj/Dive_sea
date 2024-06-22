import download from './../../assets/img/download.svg';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEvents } from '../../redux/eventsSlice/eventsSlice';
import DatePicker from 'react-date-picker';
import Combobox from 'react-widgets/Combobox';

import Select from '../../components/select/select';
import Button from '../../components/button/button';
import Banner from '../../components/banner/banner';
import Input from '../../components/input/input';
import Title from '../../components/title/title';

import 'react-widgets/styles.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import styles from './form.module.css';

const Form = () => {
  const events = useSelector((state) => state.events.events);
  const [event, setEvent] = useState(events);
  const [date, setDate] = useState();
  const [err, setErr] = useState('');
  const [places, setPlaces] = useState([
    'ХайПарк ГГНТУ',
    'ТехноПарк ЧГУ',
    'Актовый зал ГГНТУ',
    'Актовый зал ЧГУ',
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendData = () => {
    if (!(events.title && events.description && events.tag && events.money)) {
      setErr('Заполните все поля!');
    } else {
      setErr('');
      navigate('/account');
      dispatch(setEvents(event));
    }
  };
  useEffect(() => {
    dispatch(setEvents({ ...events, ...event }));
  }, [event]);
  useEffect(() => {
    setEvent({ ...event, date: new Date(date).toLocaleString().substring(0, 10) });
  }, [date]);

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
              value={event}
              keyName={'title'}
              setValue={setEvent}
            />
          </div>
          <div className={styles.input}>
            <Input
              name="Описание"
              placeholder="Введите описание"
              value={event}
              keyName={'description'}
              setValue={setEvent}
            />
          </div>
          <div className={styles.input}>
            <Input
              name="Теги"
              placeholder="Введите тег"
              value={event}
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
                <Select placeholder="Формат" options={['$', '₽']} />
                <input
                  value={event.money}
                  type={'money'}
                  placeholder="500"
                  className={styles.money}
                  onChange={(e) => setEvent({ ...event, money: e.target.value })}
                />
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.p}>Формат</div>
              <div className={styles.text}>
                <Select placeholder="Формат" options={['Онлайн', 'Оффлайн']} />
              </div>
            </div>
          </div>
          <div className="flex flex-sb flex-hc aling-end">
            <div className={styles.program}>
              <div>
                <label htmlFor="combobox" className={styles.label}>
                  Зарезервировать место
                </label>
                <div className={styles.combobox}>
                  <Combobox
                    hideCaret
                    hideEmptyPopup
                    data={places}
                    defaultValue={events.place}
                    onSelect={(value) =>
                      setEvent((prev) => {
                        return { ...prev, place: value };
                      })
                    }
                    placeholder="Выберите место проведения"
                  />
                </div>
              </div>
            </div>
            <Link to="/place" className={styles.button}>
              <Button button="Зарезервировать" />
            </Link>
          </div>
          <div className="flex flex-sb flex-hc aling-end">
            <div className={styles.program}>
              <div className={styles.label}>Пригласить спикера</div>
              <div className={styles.combobox}>
                <Combobox
                  name="Пригласить спикера "
                  placeholder="Выберите спикера "
                  hideCaret
                  hideEmptyPopup
                  data={['Макка Межиева', 'Мадина Юсупова']}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button button="Пригласить" />
            </div>
          </div>
          <div className="flex flex-sb flex-hc aling-end">
            <div className={styles.lable_div}>
              <div className={styles.label}>Программа</div>
              <div className={styles.program_file} placeholder="Выберите файл">
                <input
                  className={styles.input_file}
                  type={'file'}
                  onChange={(e) => setEvent({ ...event, program: e.target.value })}
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button button="Загрузить" />
            </div>
          </div>
          <div className={styles.creat}>
            <div className={styles.error}>{err}</div>
            <Button button="Создать" onClick={sendData} />
          </div>
        </div>
        <div className={styles.banner}>
          <Banner
            download={download}
            text="PNG, GIF, WEBP, MP4 or MP3. Max 1Gb."
            value={event.file}
            setValue={setEvent}
          />
          <div className={styles.download}>
            <Button button="Загрузить" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
