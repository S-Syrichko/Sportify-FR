import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useParams } from "react-router-dom";
import { fetchUser, User, KeyDataObject } from "../../api/apiService.js";
import Activity from "../../components/recharts/ActivityChart/ActivityChart";
import SessionsChart from "../../components/recharts/SessionsChart/SessionsChart";
import PerformanceChart from "../../components/recharts/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/recharts/ScoreChart/ScoreChart";
import { ReactComponent as Fire } from "../../assets/cards/energy.svg";
import { ReactComponent as Chicken } from "../../assets/cards/chicken.svg";
import { ReactComponent as Apple } from "../../assets/cards/apple.svg";
import { ReactComponent as Burger } from "../../assets/cards/cheeseburger.svg";
import Card from "../../components/Card/Card";

interface ProfileState {
  user: User | undefined;
}

const cardList = [
  {
    svg: Fire,
    color: "#ff0000",
  },
  {
    svg: Chicken,
    color: "#4ab8ff",
  },
  {
    svg: Apple,
    color: "#fdcc0c",
  },
  {
    svg: Burger,
    color: "#fd5181",
  },
];

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
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      {user && (
        <div style={{ display: "flex", marginTop: "75px"}}>
          <div className="chartsColumn" style={{display: "flex", flexDirection: "column", width: "70%"}}>
            <Activity userId={userIdValue} />
            <div className="chartsLine"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <SessionsChart userId={userIdValue} />
              <PerformanceChart userId={userIdValue} />
              <ScoreChart scoreData={user.data.score} />
            </div>
          </div>
          <div className="cards"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "20%",
              marginLeft: "30px",
            }}
          >
            {Object.keys(user.data.keyData).map((key, index) => (
              <Card
                key={index}
                SvgIcon={cardList[index].svg}
                color={cardList[index].color}
                value={parseInt(user.data.keyData[key as any])}
                type={key.split("Count")[0]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
