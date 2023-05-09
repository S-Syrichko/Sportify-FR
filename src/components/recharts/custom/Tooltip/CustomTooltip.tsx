import React from "react";
import styles from "./CustomTooltip.module.scss";
import PropTypes from "prop-types";
import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  chartName: string;
}
/**
 * Recharts custom tooltip component.
 * @category Recharts components
 * @property {bool} active - Is tooltip active
 * @property {array} payload - The data used to render the tooltip.
 * @property {"activity" |"sessions"} chartName - The name of the chart to determine which tooltip to display.
 * @returns {JSX.Element | null} The custom recharts legend.
 * @example
 * // Example usage:
 * import { Tooltip } from "recharts";
 * <Tooltip content={<CustomTooltip chartName="activity" />} />
 */
const CustomTooltip = ({
  active,
  payload,
  chartName,
}: CustomTooltipProps): JSX.Element | null => {
  if (active && payload && payload.length) {
    switch (chartName) {
      case "activity":
        return (
          <div className={styles.tooltipActivity}>
            <p className="weight">{`${payload[0].value}kg`}</p>
            <p className="energy">{`${payload[1].value}Kcal`}</p>
          </div>
        );

      case "sessions":
        return (
          <div className={styles.tooltipSessions}>
            <p className="time">{`${payload[0].value} min`}</p>
          </div>
        );
    }
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      unit: PropTypes.string,
    })
  ),
  chartName: PropTypes.oneOf(["activity", "sessions"]).isRequired,
};

export default CustomTooltip;
