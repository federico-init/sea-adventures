// import style
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.Banner}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/images/banner.jpeg"
          alt="banner image"
        />
      </div>
      <div className={styles.numbersWrapper}>
        <div className={styles.numbersItem}>
          <h3 className={styles.numbersText}>+20</h3>
          <h3 className={styles.numbersDesc}>Destinazioni</h3>
        </div>
        <div className={styles.numbersItem}>
          <h3 className={styles.numbersText}>+15</h3>
          <h3 className={styles.numbersDesc}>Imbarcazioni</h3>
        </div>
        <div className={styles.numbersItem}>
          <h3 className={styles.numbersText}>+40</h3>
          <h3 className={styles.numbersDesc}>Itinerari</h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
