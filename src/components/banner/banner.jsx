import styles from './banner.module.css';

const Banner = ({ download, text, value, setValue }) => {
  console.log();
  return (
    <label className={styles.banner}>
      {value ? (
        <img src={value} alt="" className={styles.image} />
      ) : (
        <div className={styles.div}>
          <div className={styles.img}>
            <img src={download} alt="" />
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      )}

      <input
        type="file"
        className={styles.input}
        onChange={(e) => setValue({ ...value, file: './' + e.target.value.substring(11) })}
      />
    </label>
  );
};

export default Banner;
