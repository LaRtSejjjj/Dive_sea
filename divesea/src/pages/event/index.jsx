import Button from '../../components/button/button';
import Tag from '../../components/tag/tag';
import Description from '../../components/description/description';
import Cart from '../../components/cart/cart';
import Text from '../../components/text/text';

import person from './../../assets/img/person.svg';
import arrow from './../../assets/img/arrow.svg';
import stars from './../../assets/img/stars.svg';

import styles from './event.module.css';
import Speaker from '../../components/speaker/speaker';
import Notice from '../../components/notice/notice';
import SpeakerBack from '../../components/speakerback/speakerback';
import Comments from '../../components/comments/comments';
import Feedback from '../../components/feedback/feedback';


const Event = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.arrow}>
        <img src={arrow}/>
        Мероприятие
      </button>
      <div className={styles.cart}>
        <img className={styles.img} src="https://i.pinimg.com/originals/7d/06/21/7d0621d52067878efbdb6011caa9c70d.jpg" />
        <div>
          <div className={styles.h1}>Stoplight Party - Young Professionals</div>
          <div className={styles.p}>Join Owl Be Yours and HERE Studio for a fantastic Stoplight Party. At the party, you will be able to choose a green solo cup if you're single, yellow solo cup if your relationship situation is complicated, and red solo cup if you're taken. No matter what your situation is, we encourage to meet and mingle with your neighbors and potential new friends!</div>
          <div className={styles.p}>The party will feature a complimentary beverage (IDs will be checked), bites for purchase, and fantastic people for you to meet! As always, be respectful, kind, and come ready to mingle.</div>
          <img src={stars}/>
          <div className={styles.creat}>
            <div className="flex aling-center">
              <img src={person} />
              <div>
                <div className={styles.h2}>Created by</div>
                <div className={styles.text}>Perperzon</div>
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
              <Text title="Количество мест" text="до 100 мест" />
              <Text title="Телефон" text="8(999)999-99-99" />
            </div>
            <div>
              <Text title="Email" text="ssdfd@email.ru" />
              <Text title="Цена билета" text="Бесплатно" />
            </div>
          </div>
          <Text title="Tags" />
          <div className={styles.tag}>
            <Tag tag="DevOps" />
            <Tag tag="Software Engineers" />
            <Tag tag="Tech Talks" />
          </div>
          <Button button="Программа" />
        </div>
        <div className={styles.left}>
          <div className={styles.info}>
            <div>
              <Text title="Data" text="Суббота, 18 мая 2024 г." />
              <Text text="18:00 до 20:00 GMT-4" />
            </div>
            <div>
              <Text title="Place" text="HERE Studio" />
              <Text text="21 Division Pl · Brooklyn" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Comments />
        <Feedback name="Егор"
        img="https://i.pinimg.com/564x/6d/43/12/6d43125cf7192f53148acf93d26a33e8.jpg"
        text="Вау самое крутое!!!! Недавно я имел удовольствие посетить [Название мероприятия], и это было поистине исключительное событие, которое превзошло все мои ожидания. От вдохновляющих выступлений до захватывающих развлечений - это мероприятие оставило незабываемые впечатления."/>
      </div>
      <div>
        <Description title="Спикеры"/>
        <div className={styles.speaker}>
          <Speaker img="https://i.pinimg.com/originals/a7/4d/ed/a74ded8b3868396d05fde493923ddae0.png" 
          role="Спикер" name="Алла Пугачёва" quantity="32"/>
          <Speaker img="https://i.pinimg.com/564x/f4/d8/b9/f4d8b90683f0a6b1de0e18284f1fae13.jpg"
          role="Спикер" name="Алла Пугачёва" quantity="32"/>
          <SpeakerBack title="О том как я создал свой бизнес" 
          text="Join Owl Be Yours and HERE , and come ready to mingle. Описание темы." />
        </div>
      </div>
    </div>
  );
};

export default Event;