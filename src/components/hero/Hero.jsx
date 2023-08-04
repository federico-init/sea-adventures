// import Next
import Image from "next/image";

// import style
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <main className={styles.Hero}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/images/hero.jpeg"
          alt="hero image"
        />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
      </div>
    </main>
  );
};

export default Hero;
