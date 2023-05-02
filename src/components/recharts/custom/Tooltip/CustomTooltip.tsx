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

const Tooltip = ({
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

Tooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      unit: PropTypes.string,
    })
  ),
  chartName: PropTypes.string.isRequired,
};

export default Tooltip;
