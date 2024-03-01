import React from "react";
import s from "../Advertising/Advertising.module.scss";
import Flag from "../../../assets/img/flag.png";
import Egypt from "../../../assets/img/egypt.png";

export const Advertising = () => {
  return (
    <div className={s.advertising}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="26"
        viewBox="0 0 375 26"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M14.3532 14.4774L-24.1727 12.8833L-22.5895 0.509826L437.61 0.509762L434.971 19.5634L422.297 17.7416L418.469 16.0715L411.604 17.7416L398.27 17.7416L395.762 16.9824L380.316 17.7416L376.751 25.1808L371.734 19.5634L361.701 16.0715L354.044 19.5634L340.05 17.7416C336.618 17.4885 331.758 16.8003 329.223 16.0715C326.055 15.1606 319.718 16.9825 317.473 16.9825C315.678 16.9825 310.825 14.9835 308.889 15.2365L298.196 17.7416C298.196 17.7416 284.677 13.8701 283.41 13.8701C282.142 13.8701 268.492 19.5634 268.492 19.5634L256.61 13.8701L245.256 13.8701L233.771 15.2365L228.622 21.1576L221.097 15.2365L213.308 17.7416L205.783 16.0715L198.786 17.7416L195.222 14.4774L192.444 16.0715L186.9 15.2365L169.473 16.0715L163.004 16.9825L155.875 14.4774L150.595 21.1576L139.637 14.4774L129.736 11.1034L125.109 16.0716L116.131 13.8701L109.431 15.2365L103.207 14.4774L96.1641 18.7624L86.9684 12.8833L72.8424 14.4774L65.7135 12.8833L57.0003 19.5635L40.081 16.0716L32.2967 19.5635L27.1511 16.0716L20.6862 17.7416L20.6862 21.1576L20.6862 25.1809L16.5961 20.5134L14.3532 14.4774Z"
          fill="#05071A"
        />
      </svg>
      <img src={Flag} alt="flag" />

      <div className={s.advertisingWinners}>
        Recent <span>winners</span>
      </div>

      <div className={s.egypt}>
        <div className={s.advertisingDescription}>
          Robert - €18.75 <br />
          <span>in Sun of Egypt</span>
        </div>
        <img src={Egypt} alt="egypt" />
      </div>

      <div className={s.advertisingDescription}>
        Robert - €18.75 <br />
        <span>in Crystal Fruits</span>
      </div>
    </div>
  );
};
