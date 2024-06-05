import Cart from '../../components/cart/cart';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import magnifier from './../../assets/img/magnifier.svg';
import poster from './../../assets/img/poster.svg';

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="EVENTs" />
      <div className="flex flex-sb flex-hc">
        <div className="flex flex-sb flex-hc">
          <Select placeholder="Введите город/регион" select="Грозный"/>
          <div className={styles.magnifier}>
            <img src={magnifier} alt="" />
          </div>
        </div>
        <button className={styles.button}>
          Сортировка по дате
        </button>
      </div>
      <div className={styles.cart}>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
        <Cart poster={poster} quantity="200" text="Sun-Glass"/>
      </div>
    </div>
  );
};

export default Main;