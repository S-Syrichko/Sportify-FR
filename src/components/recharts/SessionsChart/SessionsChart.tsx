import React, { useEffect, useState } from "react";
import styles from "./SessionsChart.module.scss";
import moment from "moment";
import {
  ReferenceArea,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchUserSessions, UserSessions } from "../../../api/apiService.js";
import CustomLegend from "../custom/Legend/CustomLegend";
import CustomTooltip from "../custom/Tooltip/CustomTooltip";

interface DataState {
  userSessions: UserSessions | undefined;
}

interface SessionProps {
  userId: number;
}

const SessionsChart = ({ userId }: SessionProps) => {
  const [state, setState] = useState<DataState>({ userSessions: undefined });
  const [activeValue, setActiveValue] = useState<string |number| undefined>();


  useEffect(() => {
    if (userId) {
      fetchUserSessions(userId).then((data) => {
        setState((prevState) => ({
          ...prevState,
          userSessions: data,
        }));
      });
    }
  }, [userId]);

  const { userSessions } = state;

  return (
    <div className={styles.sessions}>
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          onMouseMove={(e) => setActiveValue(e.activeLabel ?? undefined)}
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
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "#ffffff", strokeWidth: 8, r: 4 }}
            style={{ overflow: "visible" }}
          />
          <XAxis
            dataKey="day"
            scale="point"
            type="category"
            tickFormatter={(day) =>
              moment(day, "E").format("dddd")[0].toUpperCase()
            }
            style={{
              transform: "scale(0.8)",
              transformOrigin: "center bottom",
            }}
            height={20}
            tick={{ fill: "#FFFFFF", opacity: "0.5" }}
            textAnchor="middle"
            fontSize={15}
            tickMargin={20}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
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
            offset={0}
            cursor={false}
            separator={""}
            content={<CustomTooltip chartName="sessions" />}
          />
          {activeValue && (
            <ReferenceArea
              x1={activeValue}
              x2={
                userSessions?.data.sessions[
                  userSessions?.data.sessions.length - 1
                ].day
              }
              y1={0}
              y2={260}
              fill="#000000"
              opacity={0.4}
              ifOverflow="visible"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
