import React, { ReactComponentElement } from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

interface ButtonProps {
  id: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  value: string | React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.clickHandler) {
      props.clickHandler(event);
    }
  };

  return (
    <button
      id={props.id}
      className={styles.button}
      onClick={handleClick}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    isDisabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
