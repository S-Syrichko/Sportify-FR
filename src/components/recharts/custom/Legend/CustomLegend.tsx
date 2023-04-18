import React from "react";
import styles from "./CustomLegend.module.scss";
import { LegendProps } from "recharts";

interface CustomLegendProps extends LegendProps {
  chartName: string;
}

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
      default:
        return null;
        break;
    }
  }
  return null;
};

export default Legend;
