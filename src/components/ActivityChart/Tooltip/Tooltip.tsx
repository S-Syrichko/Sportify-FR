import React from 'react';
import styles from './Tooltip.module.scss';
interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ name: string; value: number }>;
    label?: string;
  }

const Tooltip = ({
    active,
    payload,
  }: CustomTooltipProps): JSX.Element | null => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p className="weight">{`${payload[0].value}kg`}</p>
          <p className="energy">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

export default Tooltip;