import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.css';

const SliderPlace = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        <div className={styles.img_div}>
          <img
            className={styles.img}
            src="https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG"
            alt=""
          />
        </div>
        <div className={styles.img_div}>
          <img
            className={styles.img}
            src="https://avatars.mds.yandex.net/get-altay/4303820/2a000001790e19c3783cbecc72b04b20250c/XXXL"
            alt=""
          />
        </div>
        <div className={styles.img_div}>
          <img
            className={styles.img}
            src="https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG"
            alt=""
          />
        </div>
        <div className={styles.img_div}>
          <img
            className={styles.img}
            src="https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG"
            alt=""
          />
        </div>
        <div className={styles.img_div}>
          <img
            className={styles.img}
            src="https://gstou.ru/images/university/media/Хайпарк/1%20(23).JPG"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderPlace;
