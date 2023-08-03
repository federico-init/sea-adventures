// import Next
import Image from "next/image";

// import style
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Image
        src="/images/logo.svg"
        alt="sea adventures logo"
        width="63"
        height="62"
      />
    </div>
  );
};
export default Header;
