import React from "react";
import { Logo } from "../../Logo/Logo";
import { Registration } from "../../Registration/Registration";
import { ButtonSection } from "../../ButtonSection/ButtonSection";
import { Advertising } from "../../Advertising/Advertising";
import s from "../Home/Home.module.scss";

export const Home = () => {
  return (
    <section className={s.home}>
      <Logo />
      <Registration />
      <ButtonSection />
      <Advertising />
    </section>
  );
};
