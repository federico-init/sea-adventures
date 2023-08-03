// import Next
import Image from "next/image";

// import style
import styles from "./Card.module.scss";

const Card = ({ data }) => {
  const convertTime = (time) => {
    // se l'orario arriva come h:mm aggiungo uno 0 per uniformare i dati
    if (time.length < 8) time = `0${time}`;

    // splitto per ottenere hh:mm
    return time.split("", 5);
  };

  const convertDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.Card}>
      <div className={styles.price}>
        <span className={styles.priceValue}>{data.budget.value}</span>
        <span className={styles.priceCurrency}>{data.budget.currencyCode}</span>
        <span className={styles.priceType}>{` ${data.budget.costType}`}</span>
      </div>
      <div className={styles.title}>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.departure}>
        <div className={styles.departureInfo}>
          <p className={styles.departureText}>partenza da</p>
          <p className={styles.departurePort}>{data.departure.Port}</p>
        </div>
        <div className={styles.itineraryInfo}>
          <p className={styles.boatType}>{data.boatType}</p>
          <p className={styles.duration}>{`${data.numberOfDays} ${
            data.numberOfDays === 1 ? "giorno" : "giorni"
          }`}</p>
        </div>
      </div>
      <div className={styles.dates}>
        <div className={styles.departureDate}>
          <p className={styles.departureDay}>
            {convertDate(data.departureDate.split(" ")[0])}
          </p>
          <p className={styles.departureTime}>
            {convertTime(data.departureDate.split(" ")[1])}
          </p>
        </div>
        <Image
          src="/icons/right-arrow-alt.svg"
          alt="departure/arrival arrow"
          width="16"
          height="16"
        />
        <div className={styles.arrivalDate}>
          <p className={styles.arrivalDay}>
            {convertDate(data.arrivalDate.split(" ")[0])}
          </p>
          <p className={styles.arrivalTime}>
            {convertTime(data.arrivalDate.split(" ")[1])}
          </p>
        </div>
      </div>
      <div className={styles.reservationsInfo}>
        <div className={styles.reservations}>
          <p className={styles.reservationsNumber}>{data.reservations}</p>
          <p className={styles.reservationsType}>
            {capitalizeFirstLetter(data.reservationsType)}
          </p>
        </div>
        <div className={styles.availability}>
          <span>Disponibilità</span>
          <p className={styles.reservationsAvailable}>
            {data.reservationsAvailable}
          </p>
        </div>
      </div>
      <button className={styles.button}>Prenota</button>
    </div>
  );
};

export default Card;
