import React, { useState } from "react";
import "./Bonus.scss";
import Start from "../../../assets/img/box-icon.png";
import First from "../../../assets/img/money.png";
import NoBonus from "../../../assets/img/no-bonus.png";
import lineBonus from "../../../assets/img/line-bonus.png";
import shevronBonus from "../../../assets/img/shevron-bonus.png";

type BonusSectionType = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => any;
};

export const BonusSection = (props: BonusSectionType) => {
  const bonuses = [
    {
      id: "bonus-start",
      title: "Welcome bonus",
      discription: "100% up to €500 +120 FreeSpins",
      class: "bonus-start",
      imgUrl: Start,
    },
    {
      id: "bonus-first",
      title: "First Deposit Bonus",
      discription: "100% up to €500 +120 FreeSpins",
      class: "bonus-first",
      imgUrl: First,
    },
    {
      id: "no-bonus",
      title: "No Bonus",
      discription: "do not want a Welcome bonus ",
      class: "no-bonus",
      imgUrl: NoBonus,
    },
  ];

  const [selectedBonus, setSelectedBonus] = useState("bonus-start");
  const handleToggleEditMode = () => {
    props.setEditMode(!props.editMode);
  };

  const handleSelectBonus = (bonusId: any) => {
    setSelectedBonus(bonusId);
    props.setEditMode(false);
  };

  const selectedBonusItem = bonuses.find((bonus) => bonus.id === selectedBonus);

  return (
    <div className="bonus-block">
      {props.editMode ? (
        bonuses.map((bonus) => (
          <div key={bonus.id} className={`${bonus.class}`}>
            <img className="bonus-img" src={bonus.imgUrl} alt={bonus.imgUrl} />
            <div className="bonus-text">
              <div className="bonus-title">{bonus.title}</div>
              <div className="bonus-discription">{bonus.discription}</div>
            </div>
            <input
              className="radio"
              type="radio"
              id={bonus.id}
              name={bonus.id}
              value={bonus.id}
              checked={selectedBonus === bonus.id}
            />
            <span className="fake" onClick={() => handleSelectBonus(bonus.id)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="check-circle" clip-path="url(#clip0_1_794)">
                  <path
                    id="Vector"
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9969 7.34878 18.9424 4.80704 17.0677 2.93234C15.193 1.05765 12.6512 0.00308769 10 0V0ZM15.7725 6.83333L10.0683 14.5742C10.001 14.6635 9.91652 14.7386 9.81986 14.7949C9.7232 14.8513 9.61629 14.8878 9.50535 14.9024C9.39442 14.917 9.28169 14.9093 9.17375 14.8799C9.06581 14.8504 8.96482 14.7997 8.87667 14.7308L4.80334 11.4742C4.71787 11.4058 4.64671 11.3212 4.59392 11.2253C4.54113 11.1294 4.50775 11.0241 4.49568 10.9153C4.4713 10.6955 4.5352 10.4751 4.67334 10.3025C4.81147 10.1299 5.01252 10.0192 5.23225 9.99484C5.45198 9.97046 5.67239 10.0344 5.845 10.1725L9.24167 12.89L14.4308 5.8475C14.4933 5.75376 14.5741 5.67365 14.6684 5.61203C14.7627 5.5504 14.8686 5.50854 14.9795 5.48896C15.0904 5.46939 15.2042 5.47251 15.3139 5.49814C15.4236 5.52377 15.5269 5.57138 15.6177 5.63808C15.7085 5.70479 15.7848 5.7892 15.8421 5.88623C15.8993 5.98326 15.9363 6.09089 15.9507 6.20261C15.9652 6.31433 15.9569 6.42782 15.9262 6.53623C15.8956 6.64464 15.8433 6.74571 15.7725 6.83333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_794">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        ))
      ) : (
        <>
          {bonuses.find((bonus) => bonus.id === selectedBonus) && (
            <div className={selectedBonusItem?.class}>
              <img
                className="bonus-img"
                src={selectedBonusItem?.imgUrl}
                alt={selectedBonusItem?.imgUrl}
              />
              <div className="bonus-text">
                <div className="bonus-title">{selectedBonusItem?.title}</div>
                <div className="bonus-discription">
                  {selectedBonusItem?.discription}
                </div>
              </div>
              <img src={lineBonus} alt={lineBonus} />
              <div>
                <img
                  onClick={handleToggleEditMode}
                  src={shevronBonus}
                  alt={shevronBonus}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
