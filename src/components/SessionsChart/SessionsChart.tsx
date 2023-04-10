import React, { useEffect, useState } from "react";
import styles from "./SessionsChart.module.scss";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchUserSessions, UserSessions } from "../../api/apiService.js";

interface DataState {
  userSessions: UserSessions | undefined;
}

interface SessionProps {
  userId: number;
}



const SessionsChart = ({ userId }: SessionProps) => {
  const [state, setState] = useState<DataState>({ userSessions: undefined });
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

  const customXAxis = (tickItem: number) => {
    
    return moment(tickItem, "DD").format("dddd").toUpperCase()
  }


  return (
    <div className={styles.sessions}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={360} height={130} data={userSessions?.data.sessions}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis
            dataKey="day"
            type="category"
            tickFormatter={customXAxis}
            axisLine={false}
            tickLine={false}
            interval={0}
            padding={{left : 10, right: 10}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
