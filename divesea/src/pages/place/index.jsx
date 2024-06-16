import { Link } from 'react-router-dom';
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

const Place = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deserunt odit expedita
          quos excepturi minus, alias ipsa culpa itaque id laboriosam totam ad fuga perspiciatis ut
          animi delectus, eius eos quidem! Reprehenderit exercitationem dolor fugit veniam soluta
          aut vitae facere accusantium natus saepe quia culpa velit vel, quidem ab sunt.
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
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
          <Select placeholder="Зал 1" />
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
            </div>
            <div className={styles.creat}>
              <div className={styles.p}>Время</div>
              <div>
                <Select placeholder="Начало" />
                <br></br>
                <Select placeholder="Конец" />
              </div>
            </div>
          </div>
          <Link to="/form">
            <Button button="Отправить заявку" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Place;
