// import React
import { useState } from "react";

// import Next
import Image from "next/image";

// import data
import { options } from "@/mock/options";

// import style
import styles from "./Dropdown.module.scss";

const Dropdown = ({ handleChange }) => {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState("Mostra tutti");

  const handleValue = (option) => {
    handleChange(option);
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownBox} onClick={() => setOpen(!open)}>
        <div className={styles.dropdown}>{selected}</div>
        <Image
          src="/icons/chevron-down-svgrepo-com 1.svg"
          alt="dropdown icon"
          width="24"
          height="24"
        />
      </div>

      <ul className={`${styles.options} ${open ? styles.open : ""}`}>
        {options.map((option) => (
          <li
            className={styles.option}
            onClick={() => handleValue(option.label)}
            key={option.id}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
