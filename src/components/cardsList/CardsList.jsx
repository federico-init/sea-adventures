// import React
import { useState } from "react";

// import component
import Card from "@/components/card";
import Dropdown from "@/components/dropdown";

// import data
import { data } from "@/mock/data";

// import style
import styles from "./CardsList.module.scss";

const CardsList = () => {
  const [maxCard, setMaxCard] = useState(8);

  const [dropdownValue, setDropdownValue] = useState("Mostra tutti");

  const onHandleClick = () => {
    setMaxCard(maxCard + 8);
  };

  // funzione che raggruppa gli item di data per porto di partenza
  const groups = data.reduce((groups, itinerary) => {
    const group = groups[itinerary.departure.Port] || [];
    group.push(itinerary);
    groups[itinerary.departure.Port] = group;
    return groups;
  }, {});

  return (
    <section className={styles.CardsList}>
      <Dropdown handleChange={setDropdownValue} />
      {dropdownValue === "Mostra tutti" ? (
        <>
          <div className={styles.Cards}>
            {data.map(
              (itinerary, i) =>
                i < maxCard && <Card data={itinerary} key={itinerary.id} />
            )}
          </div>
          {maxCard !== data.length && (
            <button onClick={onHandleClick}>Mostra altri</button>
          )}
        </>
      ) : (
        <>
          {Object.entries(groups).map((portData, i) => {
            return (
              <div className={styles.group} key={i}>
                <div className={styles.groupTitle}>
                  <h2 className={styles.title}>{portData[0]}</h2>
                </div>
                <div className={styles.groupedCards}>
                  {data
                    .filter((item) => item.departure.Port === portData[0])
                    .map((itinerary) => (
                      <Card data={itinerary} key={itinerary.id} />
                    ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default CardsList;
