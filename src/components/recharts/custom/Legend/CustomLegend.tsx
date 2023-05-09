import React from "react";
import styles from "./CustomLegend.module.scss";
import PropTypes from "prop-types";
import { LegendProps } from "recharts";

interface CustomLegendProps extends LegendProps {
  chartName: string;
}

/**
 * Recharts custom legend component.
 * 
 * Displays chart legend and/or chart title
 * @category Recharts components
 * @property {array} payload - The data used to render the legend.
 * @property {"activity" |"sessions" |"score"} chartName - The name of the chart to determine which legend to display.
 * @returns {JSX.Element | null} The custom recharts legend.
 * @example
 * // Example usage:
 * import { Legend } from "recharts";
 * <Legend content={<CustomLegend chartName="activity" />} />
 */
const CustomLegend = ({
  payload,
  chartName,
}: CustomLegendProps): JSX.Element | null => {
  if (payload && payload.length) {
    switch (chartName) {
      case "activity":
        return (
          <div className={styles.legend}>
            <h2>Activité quotidienne</h2>
            <div className={styles.legendItems}>
              <div className={styles.legendItem}>
                <div
                  className={styles.legendColor}
                  style={{ backgroundColor: payload[0].color }}
                ></div>
                <span className={styles.legendLabel}>Poids (kg)</span>
              </div>
              <div className={styles.legendItem}>
                <div
                  className={styles.legendColor}
                  style={{ backgroundColor: payload[1].color }}
                ></div>
                <span className={styles.legendLabel}>
                  Calories brûlées (kCal)
                </span>
              </div>
            </div>
          </div>
        );
      case "sessions":
        return (
          <div className={styles.sessions}>
            <h2>Durée moyenne des sessions</h2>
          </div>
        );
      case "score":
        return (
          <div className={styles.score}>
            <h2>Score</h2>
          </div>
        );
      default:
        return null;
        break;
    }
  }
  return null;
};

CustomLegend.propTypes = {
  payload: PropTypes.array,
  chartName: PropTypes.oneOf(["activity", "sessions", "score"]).isRequired,
};

export default CustomLegend;
