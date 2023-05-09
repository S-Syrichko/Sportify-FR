import React, { useState } from "react";
import styles from "./SessionsChart.module.scss";
import PropTypes from "prop-types";
import moment from "moment";
import { useUserSessions } from "./hooks/useUserSessions";
import {
  ReferenceArea,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxisProps,
} from "recharts";
import CustomLegend from "../custom/Legend/CustomLegend";
import CustomTooltip from "../custom/Tooltip/CustomTooltip";

interface SessionProps {
  userId: number;
}

const xAxisProps: Partial<XAxisProps> = {
  dataKey: "day",
  scale: "point",
  type: "category",
  tickFormatter: (day) => moment(day, "E").format("dddd")[0].toUpperCase(),

  style: {
    transform: "scale(0.8)",
    transformOrigin: "center bottom",
  },
  height: 20,
  tick: { fill: "#FFFFFF", opacity: "0.5" },
  textAnchor: "middle",
  fontSize: 15,
  tickMargin: 20,
  axisLine: false,
  tickLine: false,
  interval: 0,
};

/**
 * Displays a recharts LineChart of {@link UserSessions} sessions data.
 * 
 * Tooltip appears on Line hover
 * 
 * ReferenceArea follows the active dot and darkens chart background to the right when hover is active
 * @category Recharts
 * @prop {number} userId User id in database
 * @returns {JSX.Element} User sessions chart React Element.
 * @example
 * // Example usage:
 * <SessionsChart userId={18} />
 */
const SessionsChart = ({ userId }: SessionProps): JSX.Element => {
  const { data: userSessions, isLoading, isError } = useUserSessions(userId);
  const [activeValue, setActiveValue] = useState<string | number | undefined>();

  if (isLoading) return <div className={styles.sessions}>Loading...</div>;
  if (isError) return <div className={styles.sessions}>Error fetching user sessions data</div>;

  return (
    <div className={styles.sessions}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          onMouseMove={(e) => setActiveValue(e.activeLabel ?? undefined)}
          onMouseLeave={(e) => {
            setActiveValue(undefined);
          }}
          width={260}
          height={260}
          data={userSessions?.data.sessions}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 40,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="1" x2="1" y2="1">
              <stop offset="1%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="99%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          {activeValue && (
            <ReferenceArea
              x1={activeValue}
              x2={
                userSessions?.data.sessions[
                  userSessions?.data.sessions.length - 1
                ].day
              }
              y1={-400}
              y2={400}
              fill="#000000"
              opacity={0.4}
              ifOverflow="visible"
            />
          )}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "#ffffff", strokeWidth: 8, r: 4 }}
            style={{ overflow: "visible" }}
            isAnimationActive={false}
          />
          <XAxis {...xAxisProps} />
          <YAxis
            type="number"
            domain={["dataMin - 2", "dataMax + 2"]}
            hide={true}
          />
          <Legend
            content={<CustomLegend chartName="sessions" />}
            verticalAlign="top"
          />

          <Tooltip
            wrapperStyle={{ outline: "none" }}
            cursor={false}
            separator={""}
            content={<CustomTooltip chartName="sessions" />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionsChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default SessionsChart;
