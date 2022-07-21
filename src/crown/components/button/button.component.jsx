import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (type = "base") => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[type];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
