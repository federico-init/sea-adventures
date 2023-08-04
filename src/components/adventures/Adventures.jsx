// import React
import { useEffect, useState } from "react";

// import component
import Card from "@/components/card";

// import data
import { data } from "@/mock/data";

// import function
import { dataShuffle } from "@/utils/fn";

// import style
import styles from "./Adventures.module.scss";

const Adventures = () => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    setShuffledData(dataShuffle(data));
  }, []);

  return (
    <section className={styles.Adventures}>
      <h2 className={styles.title}>Avventure da scoprire</h2>
      <div className={styles.Cards}>
        {shuffledData.map(
          (itinerary, i) =>
            i < 8 && <Card data={itinerary} key={itinerary.id} />
        )}
      </div>
    </section>
  );
};

export default Adventures;
