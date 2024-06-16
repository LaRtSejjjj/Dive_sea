import styles from './banner.module.css';

const Banner = ({ download, text, value, setValue }) => {
  return (
    <label className={styles.banner}>
      <div className={styles.div}>
        <div className={styles.img}>
          <img src={download} alt="" />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
      <input
        type="file"
        className={styles.input}
        value={value.file}
        onChange={(e) => setValue({ ...value, file: e.target.value })}
      />
    </label>
  );
};

export default Banner;
