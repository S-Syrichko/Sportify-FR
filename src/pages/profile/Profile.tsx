import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useParams } from "react-router-dom";
import { fetchUser, User } from "../../api/apiService.js";
import Activity from "../../components/recharts/ActivityChart/ActivityChart";
import SessionsChart from "../../components/recharts/SessionsChart/SessionsChart";

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
        <div>
          <Activity userId={userIdValue} />
          <div>
            <SessionsChart userId={userIdValue} />
          </div>

        </div>
      )}
    </div>
  );
};

export default Profile;
