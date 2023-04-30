//Card.tsx
import React, { ReactComponentElement, useState } from "react";
import styles from "./Card.module.scss";
import { capitalize, hexToRgb } from "../../utils/functions";
import { unitPluralTranslations } from "../../utils/translations";

interface CardProps {
  SvgIcon: any;
  color: string;
  value: any;
  type: string;
}

const Card = (props: CardProps) => {
  const { SvgIcon, color, value, type } = props;
  const iconProps = { ...props };

  const [unit, setUnit] = useState<string | undefined>(() => {
    switch (type) {
      case "calorie":
        return "kCal";
      case "protein":
      case "carbohydrate":
      case "lipid":
        return "g";
      default:
        console.error("Unexpected type value for Card");
        break;
    }
  });

  const valueFormatter =(value: number) => {
   return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(value)
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.cardVector}
        style={{ background: `rgba(${hexToRgb(color)}, 0.1)` }}
      >
        <SvgIcon {...props} fill={color} height={20} />
      </div>
      <div className={styles.cardInfos}>
        <h2>
          {valueFormatter(value)}
          {unit}
        </h2>
        <span>{capitalize(unitPluralTranslations[type])}</span>
      </div>
    </div>
  );
};

export default Card;
