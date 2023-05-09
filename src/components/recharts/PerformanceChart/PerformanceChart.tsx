import React from "react";
import styles from "./PerformanceChart.module.scss";
import PropTypes from "prop-types";
import { useUserPerformance } from "./hooks/useUserPerformance";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import CustomPolarAngleAxis from "../custom/PolarAngleAxis/CustomPolarAngleAxis";

interface SessionProps {
  userId: number;
}

/**
 * Displays a recharts RadarChart of {@link UserPerformance} data.
 * 
 * @category Recharts
 * @prop {number} userId User id in database
 * @returns {JSX.Element} User performance chart React Element.
 * @example
 * // Example usage:
 * <PerformanceChart userId={18} />
 */
const PerformanceChart = ({ userId }: SessionProps) => {
  const {
    data: userPerformance,
    isLoading,
    isError,
  } = useUserPerformance(userId);

  if (isLoading) return <div className={styles.performance}>Loading...</div>;
  if (isError) return <div className={styles.performance}>Error fetching user performance data</div>;

  return (
    <div className={styles.performance}>
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          innerRadius={10}
          data={userPerformance?.data.data}
        >
          <PolarGrid
            type="circle"
            radialLines={false}
            polarRadius={[11.25, 22.5, 45, 67.5, 90]}
          />
          <PolarAngleAxis
            dataKey="kind"
            range={[-150, 210]}
            tick={(props) => (
              <CustomPolarAngleAxis
                {...props}
                userPerformance={userPerformance}
              />
            )}
          />
          <Radar
            name="performance"
            dataKey="value"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PerformanceChart;
