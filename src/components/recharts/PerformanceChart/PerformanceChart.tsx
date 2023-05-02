import React, { useEffect, useState } from "react";
import styles from "./PerformanceChart.module.scss";
import PropTypes from "prop-types";
import { fetchUserPerformance, UserPerformance } from "../../../api/apiService";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import CustomPolarAngleAxis from "../custom/PolarAngleAxis/CustomPolarAngleAxis";

interface DataState {
  userPerformance: UserPerformance | undefined;
}
interface SessionProps {
  userId: number;
}

/**
 * User performance chart
 * @description Displays a recharts RadarChart of user performance data.
 * @prop {number} userId Database user id
 * @returns User performance chart React Element.
 */
const PerformanceChart = ({ userId }: SessionProps) => {
  const [state, setState] = useState<DataState>({ userPerformance: undefined });

  useEffect(() => {
    if (userId) {
      fetchUserPerformance(userId).then((data) => {
        setState((prevState) => ({
          ...prevState,
          userPerformance: data,
        }));
      });
    }
  }, [userId]);

  const { userPerformance } = state;

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
