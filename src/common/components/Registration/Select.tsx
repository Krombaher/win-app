import React from "react";
import Select from "react-select";
import s from "../Registration/Registration.module.scss";
import "./Select.scss";

const optionsContry = [
  { value: "Belarus", label: "Belarus" },
  { value: "Germany", label: "Germany" },
  { value: "Africa", label: "Africa" },
];

const optionsСurrency = [
  { value: "RUB", label: "RUB" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
];

export const SelectSection = () => {
  return (
    <div>
      <div className={s.selectSection}>
        <Select
          placeholder="Contry..."
          classNamePrefix="custom-select"
          options={optionsContry}
        />
        <Select
          placeholder="Сurrency..."
          classNamePrefix="custom-select"
          options={optionsСurrency}
        />
      </div>
    </div>
  );
};
