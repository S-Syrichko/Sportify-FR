import React from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";
import { CardProps } from "./CardProps";
import { capitalize, hexToRgb } from "../../utils/functions";
import { unitPluralTranslations } from "../../utils/translations";
import { useUnit } from "./hooks/useUnit";

/**
 * @category Components
 * @description Card component displaying a colored icon, a formatted value, and its unit
 * @param {CardProps} props CardProps interface
 * @return {JSX.Element} The Card component
 * @example
 * // Example usage:
 * import { ReactComponent as CustomSvg } from "../../assets/cards/customSvg.svg";
 * <Card SvgIcon={CustomSvg} color="#ffa600" value={2000} type="calorie" />
 */
const Card = (props: CardProps): JSX.Element => {
  const { SvgIcon, color, value, type } = props;
  const { unit, formattedValue, isError, message } = useUnit(type, value)();

  if (isError) return <div className={styles.card}>{message}</div>;
  return (
    <div className={styles.card}>
      <div
        className={styles.cardVector}
        style={{ background: `rgba(${hexToRgb(color)}, 0.1)` }}
      >
        <SvgIcon fill={color} height={20} />
      </div>
      <div className={styles.cardInfos}>
        <h2>
          {formattedValue}
          {unit}
        </h2>
        <span>{capitalize(unitPluralTranslations[type])}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  SvgIcon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["calorie", "protein", "carbohydrate", "lipid"])
    .isRequired,
};

export default Card;
