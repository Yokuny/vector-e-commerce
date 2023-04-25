"use client";
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { cartOutline } from "ionicons/icons";
import { personOutline } from "ionicons/icons";
import { searchOutline } from "ionicons/icons";
import iconsStyle from "./header_icons.module.css";

const HeaderIcons = () => {
  return (
    <div className={iconsStyle.iconsStyle}>
      {/* mudar h4 para LINK */}
      <h4>
        <IonIcon icon={searchOutline} />
      </h4>
      <h4>
        <IonIcon icon={heartOutline} />
      </h4>
      <h4>
        <IonIcon icon={personOutline} />
      </h4>
      <h4>
        <IonIcon icon={cartOutline} />
      </h4>
    </div>
  );
};
export default HeaderIcons;
