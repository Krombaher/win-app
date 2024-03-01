import React from "react";
import s from "../Menu/Menu.module.scss";
import { LogoMenu } from "../../Logo/LogoMenu";
import { Navigation } from "./Navigation";

export const Menu = () => {
  return (
    <section className={s.menu}>
      <LogoMenu />
      <div className={s.autorisation}>
        <button className={s.registerBtn}>Register</button>
        <button className={s.loginBtn}>Log in</button>
      </div>
      <div className={s.search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M7.88974 15.4477C9.62525 15.4474 11.3107 14.8777 12.6779 13.8295L16.9761 18.0438L18.3587 16.6883L14.0604 12.4739C15.1301 11.1333 15.7114 9.48035 15.7119 7.77827C15.7119 3.54953 12.2027 0.108826 7.88974 0.108826C3.57682 0.108826 0.067627 3.54953 0.067627 7.77827C0.067627 12.007 3.57682 15.4477 7.88974 15.4477ZM7.88974 2.02619C11.1252 2.02619 13.7563 4.606 13.7563 7.77827C13.7563 10.9506 11.1252 13.5304 7.88974 13.5304C4.65432 13.5304 2.02316 10.9506 2.02316 7.77827C2.02316 4.606 4.65432 2.02619 7.88974 2.02619Z"
            fill="#FCC211"
          />
          <path
            d="M8.64367 6.27089C8.9822 6.68045 9.16888 7.22151 9.16888 7.7949H10.9553C10.9561 7.22843 10.8638 6.6674 10.6838 6.14423C10.5038 5.62106 10.2397 5.14612 9.90666 4.74688C8.55435 3.11725 6.20969 3.11725 4.85828 4.74688L6.11948 6.27304C6.79832 5.45607 7.96841 5.45823 8.64367 6.27089Z"
            fill="#FCC211"
          />
        </svg>
        <input className={s.searchInput} type="search" />
      </div>
      <Navigation />
    </section>
  );
};
