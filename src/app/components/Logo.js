"use client";
import { IonIcon } from "@ionic/react";
import { swapVerticalOutline } from "ionicons/icons";
import logoStyle from "./icons.module.css";

const Logo = () => {
  return (
    <div className={logoStyle.logoStyle}>
      <IonIcon icon={swapVerticalOutline} />
    </div>
  );
};
export default Logo;
