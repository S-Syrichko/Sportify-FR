import React from "react";
import styles from "./Legend.module.scss";
import PropTypes from "prop-types";

interface LegendProps {
  barColors: string[];
}

const Legend = ({ barColors }: LegendProps): JSX.Element | null => {
  return (
    <div className={styles.root}>
      <h2>Activité quotidienne</h2>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div
            className={styles.legendColor}
            style={{ backgroundColor: barColors[0] }}
          ></div>
          <span className={styles.legendLabel}>Poids (kg)</span>
        </div>
        <div className={styles.legendItem}>
          <div
            className={styles.legendColor}
            style={{ backgroundColor: barColors[1] }}
          ></div>
          <span className={styles.legendLabel}>Calories brûlées (kCal)</span>
        </div>
      </div>
    </div>
  );
};

Legend.propTypes = {
  barColors: PropTypes.array,
};

export default Legend;
