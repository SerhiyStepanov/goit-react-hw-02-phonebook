import React from "react";
import shortid from "shortid";
import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  const inputFilterId = shortid.generate();
  return (
    <div className={s.container}>
      <label htmlFor={inputFilterId} className={s.label}>
        Find contacts of name
      </label>
      <input type="text" value={value} onChange={onChange} id={inputFilterId} />
    </div>
  );
}