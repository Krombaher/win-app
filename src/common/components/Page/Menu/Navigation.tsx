import React from "react";
import s from "../Menu/Menu.module.scss";

export const Navigation = () => {
  return (
    <>
      <div className={s.menuSection}>
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <svg
              width="35"
              height="33"
              viewBox="0 0 35 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 7382">
                <path
                  id="Union"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.6805 11.3944C22.7321 10.2964 21.7207 6.51116 21.4896 5.75989C28.4073 9.79727 27.8581 22.3503 20.3245 25.9778L20.5938 26.5065C20.8539 26.9977 20.6516 27.5756 20.1893 27.8067L20.0159 27.8934C19.5247 28.1246 18.9468 27.9512 18.7157 27.4889L18.3067 26.6861C18.1655 26.719 18.0225 26.7492 17.8776 26.7766L17.9356 27.46C17.9933 28.009 17.5888 28.4713 17.0687 28.5291H16.8664C16.3463 28.5869 15.884 28.1824 15.8262 27.6622L15.7675 26.9688C15.5628 26.9688 15.3623 26.9653 15.1659 26.9585L15.1038 27.6911C15.046 28.2112 14.5837 28.6158 14.0636 28.558L13.8614 28.5291C13.3412 28.4713 12.9656 28.009 12.9945 27.4889L13.0582 26.7369C12.8932 26.7063 12.7319 26.673 12.5742 26.637L12.2433 27.2866C12.0121 27.7489 11.4342 27.9223 10.943 27.6911L10.7696 27.6045C10.3073 27.3733 10.105 26.7954 10.3651 26.3042L10.5478 25.9455C4.73052 23.184 5.97301 15.7864 5.97301 15.7864C6.05969 16.5377 6.81096 18.0691 7.41775 17.9824C7.13393 13.563 9.15433 12.7563 10.9741 12.0297C11.7481 11.7206 12.4858 11.4261 12.9945 10.8743C17.2709 4.28625 15.1327 0.0675964 15.1327 0.0675964C20.3049 3.65057 20.7383 9.80518 20.6805 11.3944ZM15.4794 21.9121C15.5372 21.9121 15.5661 21.9122 15.595 21.8833C15.7106 21.8255 15.7106 21.681 15.5661 21.5365L15.4505 21.4787C14.9458 21.2579 14.4372 21.0332 13.9136 20.802C12.9986 20.3978 12.0378 19.9734 10.9718 19.5139C10.9429 19.485 10.9429 19.485 10.914 19.485L10.8851 19.4561C10.8418 19.4416 10.7912 19.42 10.7407 19.3983C10.6901 19.3766 10.6395 19.3549 10.5962 19.3405C10.6128 19.4237 10.639 19.4972 10.6638 19.5668C10.682 19.618 10.6995 19.6671 10.7118 19.7161V19.745C10.7118 19.7595 10.719 19.7667 10.7262 19.7739C10.7334 19.7812 10.7407 19.7884 10.7407 19.8028C10.7696 19.8895 10.7985 19.9473 10.8273 20.0051L10.8274 20.0051C10.8851 20.0918 10.914 20.1785 10.9429 20.2651L11.0296 20.4385C11.0498 20.4989 11.084 20.5594 11.1126 20.61C11.125 20.632 11.1364 20.6522 11.1452 20.6697L11.2319 20.843C11.25 20.8975 11.2795 20.9405 11.3062 20.9793C11.3219 21.0023 11.3367 21.0238 11.3475 21.0453C11.4052 21.1031 11.4341 21.132 11.463 21.1898C11.4919 21.2187 11.5136 21.2476 11.5353 21.2765C11.5569 21.3054 11.5786 21.3343 11.6075 21.3631L11.7231 21.4787L11.8676 21.6232C11.8877 21.6635 11.9219 21.6897 11.9506 21.7117C11.963 21.7213 11.9744 21.73 11.9831 21.7388C12.012 21.7677 12.0698 21.8255 12.1276 21.8544C12.1421 21.8688 12.1637 21.8833 12.1854 21.8977C12.2071 21.9122 12.2288 21.9266 12.2432 21.941L12.4166 22.0277C12.4344 22.0456 12.4523 22.0524 12.477 22.0618C12.4922 22.0677 12.5101 22.0745 12.5322 22.0855C12.561 22.1 12.5899 22.1072 12.6188 22.1144C12.6477 22.1216 12.6766 22.1289 12.7055 22.1433C12.721 22.1511 12.7344 22.1588 12.7469 22.166C12.7809 22.1856 12.8077 22.2011 12.85 22.2011C12.9078 22.23 12.9945 22.2589 13.0523 22.2589C13.0812 22.2589 13.1028 22.2661 13.1245 22.2733C13.1462 22.2806 13.1678 22.2878 13.1967 22.2878C13.2834 22.3167 13.3412 22.3167 13.4279 22.3167H13.4279H13.5435H13.8902H13.9191C13.9769 22.3022 14.0419 22.295 14.1069 22.2878C14.1719 22.2806 14.2369 22.2733 14.2947 22.2589C14.3092 22.2589 14.3309 22.2517 14.3525 22.2444C14.3742 22.2372 14.3959 22.23 14.4103 22.23C14.4537 22.2155 14.497 22.2083 14.5403 22.2011C14.5837 22.1939 14.627 22.1867 14.6704 22.1722C14.6993 22.1578 14.7282 22.1505 14.7571 22.1433C14.786 22.1361 14.8148 22.1289 14.8437 22.1144L15.1038 22.0277C15.1616 22.0277 15.2194 21.9988 15.2772 21.9699C15.3639 21.9699 15.4216 21.941 15.4794 21.9121ZM21.9086 19.8462C21.9158 19.8317 21.923 19.8173 21.923 19.8028C21.9808 19.6872 22.0097 19.5717 22.0097 19.5428C21.9409 19.56 21.8824 19.5874 21.828 19.6128C21.791 19.6302 21.7559 19.6466 21.7207 19.6583L21.6918 19.6872C21.6752 19.7039 21.6682 19.7109 21.6597 19.7139C21.6534 19.7161 21.6463 19.7161 21.634 19.7161C20.5681 20.1756 19.6074 20.6 18.6924 21.0041C18.1688 21.2354 17.6602 21.4601 17.1553 21.681L17.0398 21.7388C16.9242 21.7677 16.9242 21.9122 17.0398 21.9699C17.0736 21.9699 17.0975 21.9799 17.1174 21.9881C17.1314 21.9939 17.1434 21.9988 17.1553 21.9988C17.1933 22.0115 17.2258 22.0186 17.2551 22.025C17.2927 22.0333 17.3251 22.0404 17.3576 22.0566C17.3865 22.0711 17.4154 22.0783 17.4443 22.0855C17.4732 22.0927 17.5021 22.1 17.531 22.1144L17.791 22.2011C17.8488 22.23 17.9066 22.2589 17.9644 22.2589C18.0077 22.2733 18.0511 22.2806 18.0944 22.2878C18.1378 22.295 18.1811 22.3022 18.2244 22.3167C18.2389 22.3167 18.2606 22.3239 18.2822 22.3311C18.3039 22.3384 18.3256 22.3456 18.34 22.3456C18.4556 22.3745 18.6001 22.4034 18.7157 22.4034H18.7446H19.0913H19.2069C19.2502 22.4034 19.2863 22.3961 19.3225 22.3889C19.3586 22.3817 19.3947 22.3745 19.438 22.3745C19.4669 22.3745 19.4886 22.3672 19.5103 22.36C19.5319 22.3528 19.5536 22.3456 19.5825 22.3456C19.6114 22.3311 19.6475 22.3239 19.6836 22.3167C19.7198 22.3095 19.7559 22.3022 19.7848 22.2878C19.8137 22.2733 19.8353 22.2661 19.857 22.2589C19.8787 22.2517 19.9004 22.2444 19.9292 22.23C19.987 22.23 20.0448 22.2011 20.1026 22.1722C20.1315 22.1722 20.1893 22.1433 20.2182 22.1144L20.3916 22.0277C20.406 22.0133 20.4277 21.9988 20.4494 21.9844C20.471 21.9699 20.4927 21.9555 20.5071 21.941C20.536 21.9266 20.5577 21.9049 20.5794 21.8833C20.6011 21.8616 20.6227 21.8399 20.6516 21.8255C20.6718 21.7852 20.706 21.7589 20.7346 21.7369C20.7471 21.7274 20.7585 21.7186 20.7672 21.7099L20.9117 21.5654L21.0273 21.4498L21.0273 21.4498C21.0851 21.392 21.1428 21.3342 21.1717 21.2765C21.2295 21.2187 21.2584 21.1898 21.2873 21.132C21.3054 21.0776 21.335 21.0345 21.3616 20.9958C21.3774 20.9728 21.3921 20.9512 21.4029 20.9297L21.4896 20.7564C21.504 20.713 21.5257 20.6769 21.5474 20.6408C21.569 20.6047 21.5907 20.5685 21.6052 20.5252L21.6918 20.3518C21.7496 20.2651 21.7785 20.1785 21.8074 20.0918C21.8219 20.0629 21.8363 20.0268 21.8508 19.9906C21.8652 19.9545 21.8797 19.9184 21.8941 19.8895C21.8941 19.8751 21.9013 19.8606 21.9086 19.8462ZM12.7056 5.00866C12.7056 5.00866 12.7634 7.34914 10.9141 8.85168C9.06484 10.3542 9.98948 11.6834 9.98948 11.6834C9.98948 11.6834 9.09373 10.701 9.15152 8.79389C9.19509 7.33433 11.1931 6.03902 12.1738 5.40322C12.4939 5.19569 12.7056 5.05843 12.7056 5.00866Z"
                  fill="#FFF5D6"
                />
                <path
                  id="XMLID 1134"
                  d="M27.8261 30.5088C28.2274 30.5039 28.6045 30.3451 28.8877 30.0619C29.4834 29.4661 29.4835 28.4967 28.8878 27.901C28.2921 27.3054 27.3227 27.3053 26.727 27.901C26.511 28.1169 26.1611 28.1169 25.9452 27.901L23.8907 25.6641C23.3402 25.9285 22.9279 26.2021 22.4071 26.593H22.3008V26.8021L24.6724 29.1738C24.8883 29.3897 24.8883 29.7397 24.6724 29.9556C24.3838 30.2442 24.2249 30.6279 24.2249 31.036C24.2249 31.4441 24.3838 31.8278 24.6724 32.1164C24.961 32.405 25.3447 32.5639 25.7528 32.5639C26.1609 32.5639 26.5446 32.405 26.8332 32.1164C27.1165 31.8331 27.2752 31.4561 27.2801 31.0548C27.2837 30.7548 27.5261 30.5124 27.8261 30.5088Z"
                  fill="#FFF5D6"
                />
                <path
                  id="XMLID 1135"
                  d="M2.33373 7.63261C1.93234 7.63753 1.55534 7.7963 1.27209 8.07955C0.676399 8.67529 0.676288 9.64467 1.27198 10.2404C1.86767 10.8361 2.8371 10.8361 3.43279 10.2404C3.64877 10.0246 3.99869 10.0246 4.21461 10.2404L6.26912 12.4773C6.81959 12.2129 7.23188 11.9393 7.75271 11.5484L7.85901 11.5484L7.85901 11.3393L5.48736 8.96761C5.27149 8.75169 5.27149 8.40166 5.48736 8.18579C5.77597 7.89718 5.9349 7.51354 5.9349 7.10541C5.9349 6.69729 5.77597 6.31365 5.48736 6.02503C5.1988 5.73642 4.81511 5.57749 4.40698 5.57749C3.99885 5.57749 3.61521 5.73642 3.3266 6.02503C3.04329 6.30834 2.88459 6.68535 2.87967 7.08656C2.87607 7.38662 2.63373 7.62897 2.33373 7.63261Z"
                  fill="#FFF5D6"
                />
                <path
                  id="XMLID 1136"
                  d="M3.07266 30.497C3.02087 30.8951 3.12482 31.2907 3.36526 31.6111C3.87095 32.2849 4.83061 32.4219 5.50442 31.9162C6.17823 31.4106 6.31513 30.4509 5.80943 29.7771C5.62627 29.5328 5.67566 29.1864 5.91979 29.0031L8.42438 27.2849C8.24033 26.7026 8.02766 26.2558 7.7142 25.685L7.7292 25.5798L7.52212 25.5503L4.83944 27.5634C4.59521 27.7466 4.24869 27.6972 4.06545 27.453C3.82047 27.1266 3.46311 26.9151 3.05906 26.8575C2.65502 26.7999 2.25279 26.9031 1.92633 27.148C1.59987 27.393 1.38838 27.7504 1.33077 28.1544C1.27316 28.5585 1.37634 28.9607 1.62132 29.2872C1.8618 29.6076 2.21263 29.818 2.60914 29.8795C2.90568 29.9254 3.11139 30.1995 3.07266 30.497Z"
                  fill="#FFF5D6"
                />
                <path
                  id="XMLID 1137"
                  d="M32.2795 7.75471C32.3313 7.35665 32.2273 6.96101 31.9869 6.64061C31.4812 5.96679 30.5216 5.82985 29.8478 6.33549C29.1739 6.84113 29.037 7.80085 29.5427 8.47467C29.7259 8.71895 29.6765 9.06536 29.4324 9.24866L26.9278 10.9668C27.1118 11.5491 27.3245 11.9959 27.638 12.5667L27.623 12.6719L27.8301 12.7015L30.5127 10.6883C30.757 10.5051 31.1035 10.5545 31.2867 10.7987C31.5317 11.1251 31.8891 11.3366 32.2931 11.3942C32.6971 11.4519 33.0994 11.3487 33.4258 11.1037C33.7523 10.8588 33.9638 10.5013 34.0214 10.0973C34.079 9.69326 33.9758 9.29103 33.7309 8.96456C33.4904 8.6441 33.1395 8.43377 32.743 8.37226C32.4465 8.32635 32.2408 8.05222 32.2795 7.75471Z"
                  fill="#FFF5D6"
                />
              </g>
            </svg>

            <a className={s.menuLink} href="#">
              Games
            </a>
          </li>
          <li className={s.menuItemPromo}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Subtract"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.2763 18.306H15.3345C15.0698 18.306 14.8552 18.0802 14.8552 17.8016C14.8552 17.5231 15.0698 17.2972 15.3345 17.2972H20.0102V4.366C20.0076 2.25415 18.4106 0.542815 16.4397 0.540039H4.32924C2.35469 0.541301 0.754974 2.25756 0.75615 4.37338C0.757329 6.48915 2.35899 8.20332 4.33348 8.20206C5.33014 8.20143 6.28135 7.75498 6.95759 6.97049V21.709C6.95759 23.8229 8.55542 25.5373 10.5281 25.54H21.7671C23.7404 25.4633 25.2819 23.6869 25.2103 21.5725C25.162 20.1474 24.3903 18.9225 23.2763 18.306ZM4.32924 7.18753C2.87501 7.1903 1.694 5.92932 1.6914 4.37105C1.68881 2.81278 2.86559 1.54726 4.31982 1.54448C5.77404 1.5417 6.95506 2.80268 6.95765 4.36096V4.366C6.95765 5.92232 5.78158 7.18475 4.32924 7.18753ZM10.5329 24.5053C9.07863 24.5081 7.89761 23.2471 7.89502 21.6888C7.89243 20.1306 9.06921 18.865 10.5234 18.8623C11.9777 18.8595 13.1587 20.1205 13.1613 21.6787V21.6838C13.1613 23.2401 11.9852 24.5025 10.5329 24.5053ZM15.4788 3.86126H11.0369C10.7767 3.86126 10.5658 4.08726 10.5658 4.36601C10.5658 4.64475 10.7767 4.87075 11.0369 4.87075H15.4788C15.7389 4.87075 15.9498 4.64475 15.9498 4.36601C15.9498 4.08726 15.7389 3.86126 15.4788 3.86126ZM9.08205 6.46575H17.7021C17.9622 6.46575 18.1731 6.69175 18.1731 6.97049C18.1731 7.24924 17.9622 7.47524 17.7021 7.47524H9.08205C8.82192 7.47524 8.61101 7.24924 8.61101 6.97049C8.61101 6.69175 8.82192 6.46575 9.08205 6.46575ZM17.7021 9.20145H9.08205C8.82192 9.20145 8.61101 9.42745 8.61101 9.7062C8.61101 9.98494 8.82192 10.2109 9.08205 10.2109H17.7021C17.9622 10.2109 18.1731 9.98494 18.1731 9.7062C18.1731 9.42745 17.9622 9.20145 17.7021 9.20145ZM9.08205 11.9574H17.7021C17.9622 11.9574 18.1731 12.1834 18.1731 12.4621C18.1731 12.7409 17.9622 12.9669 17.7021 12.9669H9.08205C8.82192 12.9669 8.61101 12.7409 8.61101 12.4621C8.61101 12.1834 8.82192 11.9574 9.08205 11.9574ZM17.7021 14.7133H9.08204C8.82191 14.7133 8.611 14.9393 8.611 15.218C8.611 15.4968 8.82191 15.7228 9.08204 15.7228H17.7021C17.9622 15.7228 18.1731 15.4968 18.1731 15.218C18.1731 14.9393 17.9622 14.7133 17.7021 14.7133Z"
                fill="#FFF5D6"
              />
            </svg>
            <span className={s.counterPromo}>3</span>
            <a className={s.menuLink} href="#">
              Promotions
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M8.06964 20.1593C7.84302 19.6871 7.65236 19.1967 7.4975 18.6949L3.02122 23.1712L1.80811 27.339L5.97585 26.1258L9.60173 22.4999C8.99206 21.7899 8.4734 21.0007 8.06964 20.1593Z"
                fill="#FFF5D6"
              />
              <path
                d="M27.8725 1.27456C27.3878 0.789859 26.7433 0.522903 26.0578 0.522903C25.3723 0.522903 24.7278 0.789859 24.2431 1.27456C23.8479 1.66978 23.5966 2.18044 23.5186 2.72538L26.4221 5.62896C26.967 5.55029 27.4788 5.29761 27.8725 4.90391C28.8731 3.90324 28.8731 2.27512 27.8725 1.27456Z"
                fill="#FFF5D6"
              />
              <path
                d="M21.2586 2.80832L20.1116 3.95536L21.1742 5.01804L19.7379 6.45437H22.5526V9.54894L24.1289 7.97267L25.1916 9.03541L26.3386 7.88837L21.2586 2.80832Z"
                fill="#FFF5D6"
              />
              <path
                d="M21.4954 20.1562C21.092 20.9942 20.5748 21.7801 19.967 22.4874L23.6055 26.1258L27.7732 27.3389L26.5601 23.1712L22.0721 18.6832C21.9162 19.1881 21.724 19.6813 21.4954 20.1562Z"
                fill="#FFF5D6"
              />
              <path
                d="M7.01784 6.45437H9.84323L8.4069 5.01804L9.46959 3.95536L8.32255 2.80832L3.24255 7.88837L4.38959 9.03541L5.45228 7.97272L7.01784 9.53823V6.45437Z"
                fill="#FFF5D6"
              />
              <path
                d="M6.06134 2.71662C5.9818 2.17492 5.73117 1.66761 5.33812 1.2745C4.85336 0.789798 4.20887 0.522842 3.52339 0.522842C2.83786 0.522842 2.19337 0.789798 1.70867 1.2745C0.708113 2.27511 0.708113 3.90324 1.70867 4.90385C2.10032 5.29549 2.60876 5.54747 3.1504 5.62755L6.06134 2.71662Z"
                fill="#FFF5D6"
              />
              <path
                d="M20.9305 8.07655H8.64001V15.5365C8.64001 18.3004 9.8766 20.8773 12.0327 22.6065L14.7693 24.8012L17.5207 22.6055C19.6877 20.8762 20.9306 18.2944 20.9306 15.5218V8.07655H20.9305ZM16.2723 21.0411L14.7724 22.238L13.2849 21.0451C11.605 19.6977 10.6414 17.69 10.6414 15.5365V10.078H18.9291V15.5218C18.9291 17.682 17.9607 19.6937 16.2723 21.0411Z"
                fill="#FFF5D6"
              />
              <path
                d="M12.2635 15.5365C12.2635 17.1953 13.0057 18.7418 14.2997 19.7797L14.7748 20.1607L15.2603 19.7732C16.5608 18.7353 17.3068 17.1858 17.3068 15.5218V11.7002H12.2634V15.5365H12.2635Z"
                fill="#FFF5D6"
              />
            </svg>
            <a className={s.menuLink} href="#">
              Tournaments
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M19.8729 18.9709C19.8828 18.92 19.8906 7.90775 19.8906 7.90775C19.8906 7.47278 19.8545 7.04616 19.7862 6.63023L22.4851 2.21729C22.6555 1.93869 22.6438 1.58543 22.4555 1.31861C22.2672 1.05174 21.938 0.922639 21.6186 0.989889L17.1315 1.93465C15.7585 0.761252 13.9779 0.0515594 12.0344 0.0515594C10.0909 0.0515594 8.31031 0.761252 6.93729 1.93465L2.45022 0.989889C2.13056 0.922258 1.80162 1.05179 1.61334 1.31861C1.42496 1.58543 1.41334 1.93864 1.58378 2.21729L4.28265 6.63023C4.21437 7.04616 4.1782 7.47278 4.1782 7.90775C4.1782 7.90775 4.18377 18.9204 4.19375 18.9715C2.30269 19.4889 0.907959 21.2271 0.907959 23.287L0.907959 27.1586C0.907959 27.6104 1.27426 27.9767 1.72608 27.9767C2.1779 27.9767 2.5442 27.6104 2.5442 27.1586L2.5442 24.0051C2.69839 23.9988 2.85301 23.9952 3.0066 23.9952C6.18014 23.9952 9.21995 25.3462 11.3465 27.7019C11.4492 27.8157 11.5832 27.8993 11.7307 27.941C12.0689 28.0365 12.4809 27.9692 12.7222 27.7019C14.8488 25.3463 17.8886 23.9952 21.0622 23.9952C21.2158 23.9952 21.3704 23.9988 21.5246 24.0051L21.5246 27.1586C21.5246 27.6104 21.8909 27.9767 22.3427 27.9767C22.7945 27.9767 23.1608 27.6104 23.1608 27.1586L23.1608 23.287C23.1608 21.2263 21.765 19.4876 19.8729 18.9709ZM18.2521 18.8138L14.4888 18.8138L14.4888 17.9844C15.9952 17.4877 17.3016 16.5469 18.2521 15.3175L18.2521 18.8138ZM5.81445 7.90775C5.81445 7.82774 5.81646 7.74827 5.81946 7.66897C6.62651 7.89826 7.46116 8.01454 8.31238 8.01454C10.4168 8.01454 12.4328 7.29547 14.065 5.97601C15.2869 6.96637 16.7146 7.61372 18.2536 7.87852C18.2533 7.88828 18.2521 7.89788 18.2521 7.90775L18.2521 10.6882C18.1633 14.041 15.4083 16.7412 12.0344 16.7412C8.60473 16.7412 5.81445 13.9509 5.81445 10.5212L5.81445 7.90775ZM11.2163 18.335C11.4853 18.3629 11.7581 18.3775 12.0344 18.3775C12.3106 18.3775 12.5835 18.3629 12.8525 18.335L12.8525 20.2161C12.8525 20.6672 12.4855 21.0343 12.0344 21.0343C11.5833 21.0343 11.2163 20.6673 11.2163 20.2161L11.2163 18.335ZM9.58003 17.9844L9.58003 18.8138L5.81445 18.8138L5.81445 15.3145C6.76516 16.5454 8.07235 17.4873 9.58003 17.9844Z"
                fill="#FFF5D6"
              />
            </svg>
            <a className={s.menuLink} href="#">
              Live dealers
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 7357">
                <path
                  id="Vector"
                  d="M26.1969 11.8935C25.9725 11.5039 25.4728 11.3705 25.0827 11.5953L24.4655 11.9518C24.4877 11.721 24.5027 11.4887 24.51 11.2552L26.021 9.74378C26.3396 9.42523 26.3396 8.90878 26.021 8.59023C25.7021 8.27167 25.186 8.27167 24.8675 8.59023L24.3631 9.09477C24.3242 8.86518 24.2781 8.63737 24.2249 8.41166L25.2947 6.5588C25.52 6.16915 25.3861 5.67033 24.996 5.44502C24.6064 5.22015 24.108 5.35312 23.8823 5.74366L23.5233 6.3653C23.4268 6.15407 23.3237 5.94598 23.2141 5.74137L23.7687 3.66943C23.8849 3.23383 23.6264 2.78713 23.1917 2.67054C22.757 2.5548 22.3094 2.81237 22.1928 3.24752L22.0075 3.94014C21.86 3.76093 21.7067 3.58609 21.5478 3.41618L21.5474 1.27494C21.5474 0.82431 21.1825 0.458956 20.7318 0.459404C20.2816 0.459404 19.9163 0.82431 19.9163 1.27454L19.9164 1.98658C19.6337 1.78466 19.3403 1.59514 19.0362 1.41946C18.6466 1.19414 18.1473 1.32801 17.922 1.71766C17.6967 2.1073 17.8301 2.60612 18.2202 2.83189C21.0966 4.49353 22.8837 7.58651 22.8855 10.9056C22.8855 10.9093 22.8855 10.9129 22.8856 10.9166C22.8832 14.5344 20.7605 17.8543 17.4754 19.3763C17.0671 19.5659 16.8891 20.0501 17.0786 20.4592C17.2169 20.757 17.5116 20.9319 17.8191 20.9319C17.934 20.9319 18.051 20.9072 18.1611 20.856C19.2417 20.3553 20.2151 19.6887 21.057 18.8953H23.1967C23.6473 18.8953 24.0122 18.5304 24.0122 18.0798C24.0122 17.6291 23.6473 17.2642 23.1967 17.2642H22.4777C22.612 17.0754 22.7402 16.8824 22.8624 16.6857L24.9356 16.131C25.3712 16.0144 25.6292 15.5668 25.5126 15.1321C25.396 14.6965 24.9489 14.4376 24.5137 14.5552L23.8198 14.741C23.9014 14.5233 23.9759 14.3025 24.0438 14.0794L25.8988 13.008C26.2888 12.7829 26.4222 12.2841 26.1969 11.8935Z"
                  fill="#FFF5D6"
                />
                <path
                  id="Vector_2"
                  d="M13.573 20.2344C13.5693 20.2343 13.5657 20.2338 13.562 20.2338C13.5558 20.2338 13.5498 20.234 13.5436 20.234C9.24707 20.2255 5.62405 17.2959 4.55756 13.3295C4.55652 13.3254 4.55537 13.3213 4.55428 13.3173C4.34888 12.5492 4.23876 11.7425 4.23876 10.9106C4.23876 7.59049 6.02625 4.49481 8.90283 2.83188C9.29292 2.60657 9.42634 2.1078 9.20102 1.71765C8.97571 1.3275 8.47738 1.19454 8.08679 1.41945C7.78327 1.59489 7.4902 1.78416 7.20793 1.98573L7.20808 1.27454C7.20853 0.823905 6.84318 0.459 6.39254 0.459C5.94191 0.459 5.57701 0.823905 5.57701 1.27454L5.57661 3.41523C5.41755 3.58529 5.26423 3.76017 5.11662 3.93954L4.93153 3.24806C4.81489 2.81247 4.36779 2.554 3.93264 2.67108C3.4975 2.78772 3.23902 3.23437 3.35567 3.66997L3.91029 5.74017C3.80057 5.94498 3.69737 6.15332 3.60069 6.36479L3.24211 5.74376C3.01769 5.35366 2.51887 5.2198 2.12833 5.44511C1.73823 5.66998 1.60437 6.1688 1.82968 6.5589L2.89916 8.4111C2.84589 8.63701 2.79979 8.86502 2.76086 9.09481L2.25647 8.59027C1.93836 8.27171 1.42236 8.27171 1.10291 8.59027C0.784351 8.90838 0.784351 9.42482 1.10291 9.74383L2.61411 11.2554C2.62137 11.4893 2.63611 11.7213 2.65786 11.9513L2.04176 11.5954C1.65211 11.3701 1.15284 11.5039 0.927525 11.8936C0.70221 12.2837 0.835627 12.7825 1.22572 13.0078L3.07504 14.076C3.14284 14.3002 3.21747 14.5213 3.29901 14.7392L2.61117 14.555C2.17642 14.4392 1.72887 14.6968 1.61228 15.1319C1.49609 15.5671 1.75411 16.0142 2.18926 16.1308L4.25757 16.6847C4.38044 16.8819 4.50893 17.0753 4.64374 17.264H3.92727C3.47664 17.264 3.11173 17.6289 3.11173 18.0796C3.11173 18.5302 3.47664 18.8951 3.92727 18.8951H6.07125C7.17771 19.9338 8.49924 20.7456 9.96115 21.256C9.50833 21.5857 9.11943 21.9943 8.79679 22.482C8.54808 22.8575 8.65098 23.3634 9.02698 23.6121C9.16573 23.704 9.32165 23.7482 9.47627 23.7482C9.74047 23.7482 10.0002 23.6196 10.1566 23.3824C10.8326 22.3614 11.9464 21.8648 13.562 21.8648C13.5621 21.8648 13.5621 21.8648 13.5622 21.8648C13.5623 21.8648 13.5624 21.8648 13.5625 21.8648C15.1781 21.8648 16.2919 22.3614 16.9678 23.3824C17.1243 23.6196 17.384 23.7482 17.6487 23.7482C17.8028 23.7482 17.9593 23.704 18.0975 23.6126C18.4735 23.3639 18.5765 22.858 18.3277 22.4825C17.3423 20.9931 15.7426 20.2368 13.573 20.2344Z"
                  fill="#FFF5D6"
                />
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.10466 14.176C6.86272 14.1832 6.63805 14.0737 6.48898 13.8913C7.66828 16.6789 10.4372 18.6139 13.6255 18.5866C13.3638 18.5736 13.1228 18.4324 12.9931 18.2018L10.6741 14.0705L7.10466 14.176ZM13.794 18.5901C18.0269 18.4619 21.3672 14.9166 21.2421 10.6835C21.1821 8.65614 20.332 6.83876 19.0036 5.50288C19.0095 5.6004 19.0032 5.69815 18.9707 5.79446L17.645 9.67379L20.6053 12.4649C20.8313 12.6781 20.9072 13.0063 20.7966 13.297C20.6861 13.5878 20.4113 13.7827 20.101 13.7919L16.5316 13.8974L14.4607 18.1584C14.3354 18.415 14.0789 18.5809 13.794 18.5901ZM17.9106 4.85263C18 4.81013 18.094 4.79276 18.1892 4.78604C16.8416 3.76596 15.1531 3.17708 13.3352 3.23068C11.5083 3.28468 9.84933 3.97784 8.56076 5.08665C8.57442 5.08826 8.58814 5.08963 8.60187 5.091C8.65633 5.09642 8.71099 5.10186 8.76321 5.123L13.3974 7.02067L17.9106 4.85263ZM7.76144 6.12499C7.73744 6.06656 7.72558 6.00465 7.71687 5.94342C6.52753 7.34212 5.82426 9.1623 5.88264 11.1375C5.9068 11.9547 6.06135 12.7371 6.32123 13.4689C6.30427 13.2565 6.37164 13.0416 6.52371 12.8803L9.31399 9.91925L7.76144 6.12499Z"
                  fill="#FFF5D6"
                />
              </g>
            </svg>

            <a className={s.menuLink} href="#">
              Lottery
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="32"
              viewBox="0 0 25 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.6115 4.17817H1.69223C1.18454 4.17817 0.772949 3.76658 0.772949 3.2589C0.772949 2.75121 1.18454 2.33962 1.69223 2.33962H2.6115V1.42034C2.6115 0.912659 3.02309 0.501068 3.53078 0.501068H7.20789C7.71557 0.501068 8.12716 0.912659 8.12716 1.42034V2.33962H11.8043V1.42034C11.8043 0.912659 12.2159 0.501068 12.7235 0.501068C13.2312 0.501068 13.6428 0.912659 13.6428 1.42034V2.33962H17.3199V1.42034C17.3199 0.912659 17.7315 0.501068 18.2392 0.501068H21.9163C22.424 0.501068 22.8356 0.912659 22.8356 1.42034V2.33962H23.7549C24.2626 2.33962 24.6741 2.75121 24.6741 3.2589C24.6741 3.76658 24.2626 4.17817 23.7549 4.17817H22.8356V21.7057C22.8356 22.0286 22.6661 22.3278 22.3893 22.494L13.6428 27.7419V30.9598C13.6428 31.4675 13.2312 31.879 12.7235 31.879C12.2159 31.879 11.8043 31.4675 11.8043 30.9598V27.7419L3.05778 22.494C2.78096 22.3278 2.6115 22.0286 2.6115 21.7057V4.17817ZM17.3199 4.17817H13.6428V6.01673H17.3199V4.17817ZM11.8043 4.17817H8.12716V6.01673H11.8043V4.17817ZM20.884 2.15388H19.4842V5.55332H20.884V2.15388ZM13.6429 20.7864C13.6429 18.7589 15.2924 17.1093 17.32 17.1093C17.8277 17.1093 18.2393 16.6978 18.2393 16.1901C18.2393 15.6824 17.8277 15.2708 17.32 15.2708C15.2924 15.2708 13.6429 13.6212 13.6429 11.5937C13.6429 11.086 13.2313 10.6744 12.7236 10.6744C12.2159 10.6744 11.8043 11.086 11.8043 11.5937C11.8043 13.6212 10.1548 15.2708 8.12721 15.2708C7.61952 15.2708 7.20793 15.6824 7.20793 16.1901C7.20793 16.6978 7.61952 17.1093 8.12721 17.1093C10.1548 17.1093 11.8043 18.7589 11.8043 20.7864C11.8043 21.2941 12.2159 21.7057 12.7236 21.7057C13.2313 21.7057 13.6429 21.2941 13.6429 20.7864ZM6.40792 2.15388H5.00813V5.55332H6.40792V2.15388Z"
                fill="#FFF5D6"
              />
            </svg>
            <a href="#">Hall of fame</a>
          </li>
          <li className={s.menuItem}>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0248 3.76924H12.7389V7.35226C13.0016 7.46519 13.2589 7.59623 13.5085 7.74574C13.7436 7.60499 13.9853 7.48037 14.232 7.37202V3.76924H14.946C15.3583 3.76924 15.6926 3.43499 15.6926 3.0227C15.6926 2.61042 15.3583 2.27617 14.946 2.27617H14.232V1.40427C14.232 0.991979 13.8978 0.65773 13.4855 0.65773C13.0732 0.65773 12.7389 0.991979 12.7389 1.40427V2.27617H12.0249C11.6126 2.27617 11.2783 2.61042 11.2783 3.0227C11.2783 3.43499 11.6125 3.76924 12.0248 3.76924Z"
                fill="#FFF5D6"
              />
              <path
                d="M6.81831 20.8868H7.74058C6.60898 18.6754 5.74798 16.3773 5.38043 15.3961C5.32594 15.2507 5.28254 15.1346 5.25088 15.0531C4.60344 13.3833 4.64241 11.5498 5.35779 10.0225C6.00603 8.63855 7.14549 7.61291 8.56635 7.13448C8.64284 7.1087 8.71989 7.08531 8.79723 7.06306C7.37811 6.29154 5.76774 6.12447 4.32428 6.61051C2.99212 7.05913 1.92258 8.02321 1.31276 9.32516C0.627341 10.7885 0.5931 12.5534 1.2189 14.1674C1.25299 14.2553 1.29907 14.3781 1.35646 14.531C1.86604 15.888 3.14401 19.2906 4.8055 22.0143C5.22157 21.3384 5.96811 20.8868 6.81831 20.8868Z"
                fill="#FFF5D6"
              />
              <path
                d="M25.7043 9.32515C25.0944 8.0232 24.025 7.05912 22.6927 6.6105C21.268 6.13078 19.6621 6.2992 18.2328 7.06683C18.3057 7.08804 18.3785 7.11018 18.4507 7.13452C19.8715 7.61295 21.0109 8.63859 21.6592 10.0225C22.3746 11.5497 22.4136 13.3833 21.7661 15.0531C21.7378 15.1263 21.6999 15.2268 21.6531 15.3509C21.2777 16.3463 20.4003 18.6727 19.2335 20.8867H20.1987C21.0331 20.8867 21.7673 21.322 22.1876 21.977C23.8871 19.1813 25.2279 15.663 25.6972 14.431C25.7381 14.3239 25.7719 14.2352 25.7981 14.1673C26.4239 12.5534 26.3897 10.7885 25.7043 9.32515Z"
                fill="#FFF5D6"
              />
              <path
                d="M9.40161 20.8868H17.5609C19.017 18.2995 20.1051 15.2566 20.374 14.5631C21.3506 12.0445 20.2761 9.37438 17.9742 8.59923C16.4432 8.08367 14.755 8.53647 13.5085 9.63841C12.262 8.53647 10.5738 8.08372 9.04277 8.59923C6.74081 9.37438 5.66639 12.0444 6.64296 14.5631C6.90853 15.248 7.97289 18.2576 9.40161 20.8868Z"
                fill="#FFF5D6"
              />
              <path
                d="M21.7481 24.6317H21.0677V23.2489C21.0677 22.7689 20.6786 22.3798 20.1986 22.3798H6.81821C6.33824 22.3798 5.94914 22.7689 5.94914 23.2489V24.6317H5.26875C4.85647 24.6317 4.52222 24.966 4.52222 25.3783C4.52222 25.7906 4.85647 26.1248 5.26875 26.1248H21.7481C22.1604 26.1248 22.4946 25.7906 22.4946 25.3783C22.4946 24.966 22.1604 24.6317 21.7481 24.6317Z"
                fill="#FFF5D6"
              />
            </svg>

            <a className={s.menuLink} href="#">
              VIP
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="27"
              viewBox="0 0 23 27"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.4527 6.70732C19.4527 7.24623 19.1195 7.7074 18.6494 7.89934C19.9672 9.39795 22.888 13.4584 22.888 20.0187V20.8702C22.888 22.5505 21.9042 24.0594 20.382 24.7142C18.3509 25.5876 15.4379 26.0303 11.7235 26.0303C8.00917 26.0303 5.09612 25.5876 3.06549 24.7142C1.54283 24.0594 0.559082 22.5505 0.559082 20.8702V20.0187C0.559082 13.4583 3.47985 9.3979 4.7977 7.89929C4.32752 7.70691 3.99431 7.24618 3.99431 6.70727C3.99431 6.12368 4.38636 5.63545 4.91923 5.47745L3.34763 3.27719C3.19993 3.07065 3.12779 2.82502 3.14411 2.58543L3.14926 2.51933C3.21151 1.79451 3.65165 1.18089 4.3254 0.879001C5.00899 0.572856 5.77249 0.654848 6.36548 1.09929C6.90439 1.50297 7.75033 1.98388 8.71775 1.98388C9.35112 1.98388 9.91581 1.82762 10.3954 1.51885C11.2018 1.00013 12.2444 1.00013 13.0517 1.51925C13.5313 1.82757 14.096 1.98388 14.7294 1.98388C15.6968 1.98388 16.5427 1.50292 17.0816 1.09929C17.6751 0.654848 18.4381 0.572856 19.1217 0.879001C19.7959 1.18089 20.2352 1.79451 20.2978 2.51977L20.303 2.58761C20.3197 2.82463 20.2472 3.07026 20.0999 3.27679L18.5278 5.4775C19.0607 5.63555 19.4527 6.12378 19.4527 6.70732ZM10.006 11.0013C10.006 12.6124 8.403 14.5727 8.38667 14.5924C8.23595 14.7753 8.26128 15.0459 8.44422 15.1969C8.52453 15.263 8.62111 15.2952 8.71775 15.2952C8.84101 15.2952 8.96383 15.242 9.04884 15.1398C9.12271 15.0501 10.8648 12.9228 10.8648 11.0085C10.8648 10.9901 10.9047 9.37207 11.7236 8.23374C12.5296 9.35725 12.5809 10.9563 12.5824 11.0004L12.5824 11.0013C12.5824 13.0929 14.1196 13.5437 14.1849 13.5618C14.2231 13.5725 14.2618 13.5777 14.2996 13.5777C14.4855 13.5777 14.6551 13.4549 14.7096 13.2676C14.7753 13.0418 14.6447 12.8047 14.4197 12.736C14.3798 12.7236 13.4411 12.4209 13.4411 10.994C13.4399 10.9137 13.3999 9.31333 12.5948 7.99548H10.8523C10.0472 9.31333 10.0073 10.915 10.006 11.0013ZM17.9001 7.13673H18.1646C18.4012 7.13673 18.594 6.94394 18.594 6.70732C18.594 6.4707 18.4012 6.27792 18.1646 6.27792H17.9563H5.49079H5.28252C5.0459 6.27792 4.85312 6.4707 4.85312 6.70732C4.85312 6.94394 5.0459 7.13673 5.28252 7.13673H5.54705H11.7236H17.9001ZM14.01 19.9824C14.0445 20.0752 14.0753 20.1699 14.0989 20.2678C14.1111 20.3171 14.1227 20.3663 14.132 20.4165C14.1582 20.5636 14.1774 20.714 14.1774 20.8695C14.1774 20.9143 14.1713 20.9577 14.1652 21.0009L14.1614 21.0289L14.1185 21.4064C13.8709 22.5601 12.8446 23.4291 11.6178 23.4291C10.7527 23.4291 9.98997 22.9947 9.526 22.3362L9.45882 22.2287C9.35456 22.0636 9.2758 21.8882 9.21121 21.709C9.18495 21.6335 9.15937 21.5587 9.1402 21.4806C9.12611 21.4237 9.11335 21.3667 9.1031 21.3097C9.07818 21.1658 9.05834 21.0199 9.05834 20.8695C9.05834 20.7089 9.07752 20.5534 9.10569 20.4011C9.11119 20.3732 9.11782 20.3459 9.12445 20.3185L9.12447 20.3185C9.12787 20.3045 9.13127 20.2904 9.13452 20.2764C9.16202 20.1624 9.19661 20.0511 9.23819 19.9436L9.25124 19.9097L9.25127 19.9097C9.26127 19.8834 9.27132 19.857 9.28296 19.8316C9.33996 19.7035 9.40588 19.5807 9.48264 19.4649C9.48548 19.4603 9.48795 19.4557 9.49038 19.4512C9.49339 19.4456 9.49635 19.4401 9.4999 19.4348C9.58182 19.3138 9.67657 19.2031 9.77701 19.0988C9.80989 19.0649 9.84531 19.0339 9.88083 19.0028L9.88092 19.0027L9.881 19.0026C9.89306 18.9921 9.90513 18.9815 9.91711 18.9708C9.97278 18.9209 10.0304 18.8729 10.0899 18.8281C10.1603 18.7763 10.2326 18.7264 10.3087 18.6816C10.3346 18.6659 10.3615 18.6518 10.3885 18.6377L10.4194 18.6214C10.5128 18.5722 10.6069 18.5242 10.708 18.4857L10.726 18.4787C11.005 18.3744 11.3031 18.3098 11.618 18.3098C11.9564 18.3098 12.2777 18.3789 12.5733 18.4986L12.6694 18.5421C12.8588 18.6278 13.0309 18.7398 13.1902 18.8646C13.2402 18.9037 13.2907 18.9434 13.3374 18.9862C13.3944 19.0374 13.4481 19.0917 13.4999 19.1481C13.5493 19.2024 13.5954 19.26 13.6401 19.3183C13.6513 19.3327 13.6627 19.3471 13.6741 19.3614L13.6741 19.3614L13.6742 19.3615C13.705 19.4004 13.7359 19.4392 13.763 19.4808C13.834 19.5908 13.8973 19.7073 13.9518 19.8282C13.9677 19.8637 13.9807 19.9004 13.9937 19.9372L13.9989 19.9517L14.01 19.9824ZM9.12348 17.9564C9.23674 17.8592 9.35384 17.767 9.47801 17.6831C9.01537 17.2666 8.4158 17.0298 7.77906 17.0298C6.3674 17.0298 5.21943 18.1778 5.21943 19.5895C5.21943 21.0734 6.50374 22.2867 7.99918 22.1382C7.93067 21.9437 7.87691 21.7434 7.84049 21.536C7.83877 21.5249 7.83722 21.5138 7.83565 21.5025C7.83434 21.4931 7.83301 21.4836 7.83157 21.4739C7.79956 21.2762 7.77906 21.0753 7.77906 20.8692C7.77906 20.7201 7.78931 20.5736 7.8059 20.429C7.80985 20.3967 7.81499 20.3649 7.82015 20.333L7.82015 20.333C7.82338 20.3131 7.82662 20.2931 7.82958 20.2729C7.84366 20.1839 7.85966 20.095 7.8795 20.0079C7.89424 19.9439 7.91084 19.8812 7.92875 19.8192C7.94859 19.7475 7.9716 19.6777 7.99593 19.6086L8.00154 19.5924C8.02327 19.5294 8.04479 19.467 8.07019 19.4051C8.08804 19.3622 8.10807 19.3203 8.1281 19.2784L8.12811 19.2784L8.14761 19.2374C8.21095 19.1037 8.28137 18.9744 8.35939 18.849C8.3697 18.8325 8.37967 18.8158 8.38963 18.7992L8.38964 18.7992C8.40754 18.7693 8.4254 18.7395 8.44515 18.7108C8.47791 18.6626 8.51359 18.6165 8.54948 18.5702L8.57633 18.5354C8.61984 18.4785 8.66467 18.4222 8.71201 18.3677C8.75102 18.3217 8.79136 18.2775 8.83361 18.234C8.90595 18.1572 8.98145 18.0849 9.05947 18.0145C9.06948 18.0057 9.07923 17.9967 9.08895 17.9876C9.10036 17.977 9.11174 17.9665 9.12348 17.9564ZM13.6486 17.6165C13.9526 16.528 14.9413 15.7499 16.0976 15.7499C17.5092 15.7499 18.6572 16.8978 18.6572 18.3094C18.6572 19.7211 17.5092 20.8691 16.0976 20.8691C15.8819 20.8691 15.6675 20.8409 15.457 20.784C15.4563 20.7681 15.4546 20.7525 15.4528 20.737C15.4511 20.7212 15.4493 20.7054 15.4487 20.6893C15.4435 20.5799 15.4346 20.4718 15.4205 20.3642C15.4147 20.322 15.4083 20.2804 15.4013 20.2388C15.3815 20.1198 15.3559 20.0027 15.3258 19.8875C15.3232 19.8777 15.3207 19.8678 15.3183 19.8579C15.3148 19.8438 15.3113 19.8297 15.3072 19.8158C15.1786 19.3654 14.9694 18.9507 14.6962 18.584L14.6866 18.5706C14.4024 18.1924 14.0511 17.8686 13.6486 17.6165Z"
                fill="#FFF5D6"
              />
            </svg>
            <a className={s.menuLink} href="#">
              Payment
            </a>
          </li>
          <li className={s.menuItem}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 7609">
                <path
                  id="Vector"
                  d="M18.4598 21.9315V23.5669C18.4598 23.954 18.7737 24.2678 19.1607 24.2678H21.4971C22.1423 24.2678 22.6653 23.7448 22.6653 23.0996C22.6653 22.4545 22.1423 21.9315 21.4971 21.9315H18.4598Z"
                  fill="#FFF5D6"
                />
                <path
                  id="Vector_2"
                  d="M3.17998 1.37143H2.01179C0.97954 1.37143 0.1427 2.20822 0.1427 3.24052V15.9786C0.672962 15.6079 1.31719 15.3896 2.01179 15.3896H3.88089V2.07234C3.88089 1.68525 3.56707 1.37143 3.17998 1.37143Z"
                  fill="#FFF5D6"
                />
                <path
                  id="Vector_3"
                  d="M22.7502 4.17508C22.4316 5.03795 22.0037 5.98801 21.4313 6.93676C21.1835 7.34772 20.7749 7.64033 20.3067 7.74313C20.3423 8.20914 20.1914 8.68735 19.8516 9.05911C19.8278 9.08509 19.7746 9.14416 19.7746 9.14416C19.6947 9.23299 19.5941 9.34476 19.4796 9.45919C17.6409 11.298 15.4024 12.322 13.8483 12.8573C12.2056 13.4232 10.9814 13.5788 10.8472 13.5947C10.78 13.6026 10.7103 13.6068 10.6412 13.6068C10.4185 13.6068 10.2023 13.565 10.0009 13.4861L9.15439 14.3326C9.01757 14.4695 8.83814 14.5379 8.6588 14.5379C8.47843 14.5379 8.29816 14.4688 8.16102 14.3305C7.88687 14.054 7.90257 13.602 8.17788 13.3267L9.00958 12.495C8.90552 12.2303 8.86651 11.941 8.90108 11.6486C8.91711 11.5136 9.07351 10.2875 9.63844 8.64745C10.0652 7.40856 10.8031 5.73479 12.0163 4.17513H5.28271V16.0906C5.28271 16.4777 4.96889 16.7915 4.5818 16.7915H2.01179C0.97954 16.7915 0.1427 17.6283 0.1427 18.6606C0.1427 19.6929 0.97954 20.5297 2.01179 20.5297H21.4971C22.9142 20.5297 24.0671 21.6826 24.0671 23.0997V5.492C24.0671 4.76468 23.4775 4.17508 22.7502 4.17508Z"
                  fill="#FFF5D6"
                />
                <path
                  id="Vector_4"
                  d="M15.7625 6.7331C16.0362 7.00683 16.0362 7.4506 15.7625 7.72433L11.4092 12.0776C11.8937 11.9783 12.5875 11.8089 13.3916 11.5319C14.8061 11.0447 16.8386 10.1175 18.4883 8.46781C18.576 8.38015 18.6561 8.29122 18.7335 8.20525C18.7612 8.17455 18.7889 8.1438 18.8168 8.11319C18.9433 7.97483 18.9385 7.76148 18.806 7.62891L17.9602 6.7831L19.9996 6.37522C20.0961 6.35592 20.1801 6.2969 20.2309 6.21261C21.4384 4.21114 21.9446 2.19747 22.1388 1.17526C22.1821 0.947325 22.1102 0.713174 21.9463 0.549021C21.7827 0.385055 21.5491 0.312628 21.3215 0.355523C19.9728 0.609112 16.5624 1.47259 14.0278 4.00717C12.378 5.65693 11.4509 7.68938 10.9637 9.10391C10.6867 9.90804 10.5173 10.6018 10.418 11.0864L14.7713 6.7331C15.045 6.45937 15.4889 6.45937 15.7625 6.7331Z"
                  fill="#FFF5D6"
                />
              </g>
            </svg>
            <a className={s.menuLink} href="#">
              Support
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};