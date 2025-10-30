import React from "react";
import css from "./grid-layout.module.css";

const GridLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className={css["grid-layout"]}>{children}</section>;
};

export default GridLayout;
