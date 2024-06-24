import Ad from '../../layout/ad/ad';
import Cart from '../../components/cart/cart';
import Select from '../../components/select/select';
import Title from '../../components/title/title';
import magnifier from './../../assets/img/magnifier.svg';

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="EVENTs" />
      <div className="flex flex-sb flex-hc">
        <div className="flex flex-sb flex-hc">
          <div className={styles.format}>
            <Select
              placeholder="Формат"
              options={['Грозный', 'Москва', 'Уфа']}
            />
          </div>
          <div className={styles.magnifier}>
            <img src={magnifier} alt="" />
          </div>
        </div>
        <button className={styles.button}>
          Сортировка по дате
        </button>
      </div>
      <div className={styles.cart}>
        <Cart link="/event" poster="https://i.pinimg.com/564x/c3/52/6a/c3526a0b8a8bb4aad2d2ab24a1df95dd.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/0e/f0/51/0ef0515efc9a865d9dceb55141085d8f.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/68/40/50/684050e33b5cd9435c2626b93e21ab39.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/24/be/72/24be7265ab87bbb9a83525d6240f1920.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/d7/3c/d2/d73cd291faa215d397a2eabd6f8f0227.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/736x/7b/7d/b1/7b7db111443858199ce2494b59d2e0a3.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/6a/94/1d/6a941d5672e580706178319cc69d6151.jpg"
          quantity="200" text="Sun-Glass" />
        <Cart poster="https://i.pinimg.com/564x/5e/fe/b4/5efeb4c5ebef5c47c8ddbfabe627ad53.jpg"
          quantity="200" text="Sun-Glass" />
      </div>
    </div>
  );
};

export default Main;