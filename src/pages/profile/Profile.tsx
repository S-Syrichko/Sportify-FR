import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useParams } from "react-router-dom";
import { fetchUser, User } from "../../api/apiService.js";
import Activity from "../../components/recharts/ActivityChart/ActivityChart";
import SessionsChart from "../../components/recharts/SessionsChart/SessionsChart";
import PerformanceChart from "../../components/recharts/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/recharts/ScoreChart/ScoreChart";

interface ProfileState {
  user: User | undefined;
}

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const userIdValue = parseInt(userId!);

  const [state, setState] = useState<ProfileState>({ user: undefined });

  useEffect(() => {
    if (userId) {
      fetchUser(userIdValue).then((data) => {
        setState((prevState) => ({
          ...prevState,
          user: data,
        }));
      });
    }
  }, [userId]);

  const { user } = state;

  return (
    <div className={styles.root}>
      <h1>
        Bonjour <span>{user && user.data.userInfos.firstName}</span>
      </h1>
      {user && (
        <div style={{display:"flex"}}>
          <div>
            <Activity userId={userIdValue} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "850px",
              }}
            >
              <SessionsChart userId={userIdValue} />
              <PerformanceChart userId={userIdValue} />
              <ScoreChart scoreData={user.data.score} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "0",
            }}
          >
            Cards
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
