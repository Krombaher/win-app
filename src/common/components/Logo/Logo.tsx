import React from "react";
import s from "../Logo/Logo.module.scss";
import logo from "../../../assets/img/logo.png";
import logoTitle from "../../../assets/img/WIN spin.png";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <div className={s.wrapper}>
        <div className={s.logoWrapper}>
          <a href="#">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className={s.logoTitleWrapper}>
          <a href="#">
            <img src={logoTitle} alt="logoTitle"></img>
          </a>
        </div>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_447)">
            <rect
              x="4"
              y="0.501953"
              width="35.0615"
              height="34.9022"
              rx="17.4511"
              fill="#E93E3A"
            />
          </g>
          <path
            d="M20.69 23.6466C22.3186 23.6463 23.9003 23.1036 25.1832 22.1049L29.2167 26.1199L30.5141 24.8284L26.4806 20.8135C27.4844 19.5364 28.0299 17.9616 28.0303 16.3401C28.0303 12.3115 24.7373 9.03357 20.69 9.03357C16.6428 9.03357 13.3497 12.3115 13.3497 16.3401C13.3497 20.3687 16.6428 23.6466 20.69 23.6466ZM20.69 10.8602C23.7261 10.8602 26.1952 13.3179 26.1952 16.3401C26.1952 19.3622 23.7261 21.82 20.69 21.82C17.6539 21.82 15.1848 19.3622 15.1848 16.3401C15.1848 13.3179 17.6539 10.8602 20.69 10.8602Z"
            fill="white"
          />
          <path
            d="M21.6967 14.5724C22.0854 14.9561 22.2997 15.4629 22.2997 16H24.3507C24.3516 15.4694 24.2457 14.9439 24.039 14.4538C23.8324 13.9637 23.5291 13.5189 23.1468 13.1449C21.5942 11.6184 18.9023 11.6184 17.3507 13.1449L18.7987 14.5745C19.5781 13.8092 20.9215 13.8112 21.6967 14.5724Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1_447"
              x="0"
              y="0.501953"
              width="43.0615"
              height="42.9022"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_447"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_447"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
