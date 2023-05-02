import React, { useEffect, useState } from "react";
import styles from "./ActivityChart.module.scss";
import PropTypes from "prop-types";
import moment from "moment";
import { fetchUserActivity, UserActivity } from "../../../api/apiService.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomLegend from "../custom/Legend/CustomLegend";
import CustomTooltip from "../custom/Tooltip/CustomTooltip";

interface DataState {
  userActivity: UserActivity | undefined;
}

interface ActivityProps {
  userId: number;
}
/**
 * Activity chart
 * @description Displays a recharts BarChart of user activity data.
 * On hover, a tooltip appears.
 * @prop {number} userId Database user id
 * @returns Activity chart React Element.
 */
const ActivityChart = ({ userId }: ActivityProps) => {
  const [state, setState] = useState<DataState>({ userActivity: undefined });
  useEffect(() => {
    if (userId) {
      fetchUserActivity(userId).then((data) => {
        setState((prevState) => ({
          ...prevState,
          userActivity: data,
        }));
      });
    }
  }, [userId]);

  const { userActivity } = state;

  const yAxisDomain = (): [number, number] => {
    const sessions = userActivity?.data.sessions;

    const dataMin: number =
      sessions?.reduce(
        (min, session) => {
          return session.kilogram < min.kilogram ? session : min;
        },
        { kilogram: Infinity }
      ).kilogram ?? 0;
    const dataMax: number =
      sessions?.reduce(
        (max, session) => {
          return session.kilogram > max.kilogram ? session : max;
        },
        { kilogram: -Infinity }
      ).kilogram ?? 0;
    const range: number = dataMax - dataMin;

    return [dataMin - 1, dataMax + 3 - (range % 2)];
  };

  return (
    <div className={styles.activity}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={userActivity?.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            type="category"
            tickFormatter={(day) => moment(day, "YYYY-MM-DD").format("D")}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            domain={yAxisDomain}
            dataKey="kilogram"
            tickCount={3}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="calories"
            domain={[0, "dataMax + 100"]}
            dataKey="calories"
            tickCount={3}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip chartName="activity" />}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend
            content={<CustomLegend chartName="activity" />}
            verticalAlign="top"
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill={"#282d30"}
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill={"#e60000"}
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ActivityChart;
