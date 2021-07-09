import React, { memo, useState } from "react";
import styles from "./header.module.css";
import { FiSearch } from "react-icons/fi";
function Header({ onSearch }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search.."
            onChange={onChangeHandler}
            value={text}
          />
          <button className={styles.button} type="submit">
            <FiSearch className={styles.svg} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(Header);
