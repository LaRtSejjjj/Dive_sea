import Button from '../../components/button/button';
import Description from '../../components/description/description';
import Numbers from '../../components/numbers/numbers';
import Select from '../../components/select/select';
import Tag from '../../components/tag/tag';
import Text from '../../components/text/text';
import Title from '../../components/title/title';

import styles from './place.module.css';

const Place = () => {
  return (
    <div className={styles.wrapper}>
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
          <Button button="Отправить заявку"/>
        </div>
      </div>
    </div>
  );
};

export default Place;