// import component
import Card from "@/components/card";

// import data
import { data } from "@/mock/data";

// import style
import styles from "./CardsList.module.scss";

const CardsList = () => {
  return (
    <section className={styles.CardsList}>
      {data.map((itinerary) => (
        <Card data={itinerary} key={itinerary.id} />
      ))}
    </section>
  );
};

export default CardsList;
