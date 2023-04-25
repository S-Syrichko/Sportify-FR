import React from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import Zen from "../../../assets/zen.svg";
import Swim from "../../../assets/swim.svg";
import Bike from "../../../assets/bike.svg";
import Weight from "../../../assets/weight.svg";

const SideNav = () => {
  const userId = 18;

  return (
    <nav>
      <NavLink to={`/profile/${userId}`}>
        <Button
          id={"zen"}
          value={<img src={Zen} alt="Zen" />}
        />
      </NavLink>
      <NavLink to={`/profile/${userId}`}>
        <Button
          id={"swim"}
          value={<img src={Swim} alt="Swim" />}
        />
      </NavLink>
      <NavLink to={`/profile/${userId}`}>
        <Button
          id={"zen"}
          value={<img src={Bike} alt="Zen" />}
        />
      </NavLink>
      <NavLink to={`/profile/${userId}`}>
        <Button
          id={"zen"}
          value={<img src={Weight} alt="Zen" />}
        />
      </NavLink>
    </nav>
  );
};

export default SideNav;
