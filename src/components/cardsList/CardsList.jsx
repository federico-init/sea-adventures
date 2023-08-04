// import React
import { useState } from "react";

// import component
import Card from "@/components/card";

// import data
import { data } from "@/mock/data";

// import style
import styles from "./CardsList.module.scss";

const CardsList = () => {
  const [maxCard, setMaxCard] = useState(8);

  const onHandleClick = () => {
    setMaxCard(maxCard + 8);
  };

  return (
    <section className={styles.CardsList}>
      <div className={styles.Cards}>
        {data.map(
          (itinerary, i) =>
            i < maxCard && <Card data={itinerary} key={itinerary.id} />
        )}
      </div>
      {maxCard !== data.length && (
        <button onClick={onHandleClick}>Mostra altri</button>
      )}
    </section>
  );
};

export default CardsList;
