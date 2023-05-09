import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { ButtonProps } from "./ButtonProps";

/**
 * @category Components
 * @description Button React component
 * @param {ButtonProps} props ButtonProps interface
 * @returns {JSX.Element} A button element
 * @example
 * // Example usage:
 * <Button id="my-button" value="Click me" clickHandler={(event) => alert('Button clicked!')} />
 */
const Button = (props: ButtonProps): JSX.Element => {
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
  isDisabled: false,
};

export default Button;
