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
          <div className={styles.numbersText}>
            <h3>+20</h3>
          </div>
          <div className={styles.numbersDesc}>
            <h3>Destinazioni</h3>
          </div>
        </div>
        <div className={styles.numbersItem}>
          <div className={styles.numbersText}>
            <h3>+15</h3>
          </div>
          <div className={styles.numbersDesc}>
            <h3>Imbarcazioni</h3>
          </div>
        </div>
        <div className={styles.numbersItem}>
          <div className={styles.numbersText}>
            <h3>+40</h3>
          </div>
          <div className={styles.numbersDesc}>
            <h3>Itinerari</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
