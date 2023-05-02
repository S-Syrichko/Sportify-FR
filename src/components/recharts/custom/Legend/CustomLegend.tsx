import React from "react";
import styles from "./CustomLegend.module.scss";
import PropTypes from "prop-types";
import { LegendProps } from "recharts";

interface CustomLegendProps extends LegendProps {
  chartName: string;
}

/**
 *Recharts custom legend component.
 *@property {import("recharts").LegendPayload[]} payload - The data used to render the legend.
 *@property {string} chartName - The name of the chart to determine which legend to display.
 *@param {CustomLegendProps} props - The props of the component.
 *@returns {JSX.Element | null} The custom recharts legend.
 *@typedef {object} CustomLegendProps - The props of the component.
 */
const Legend = ({
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

Legend.propTypes = {
  payload: PropTypes.array,
  chartName: PropTypes.string.isRequired,
};

export default Legend;
