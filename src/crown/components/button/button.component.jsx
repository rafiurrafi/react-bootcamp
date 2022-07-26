const Button = ({ type, children }) => {
  const BUTTON_TYPES = {
    google: "google",
    inverted: "inverted",
  };
  return <button className={`${type[BUTTON_TYPES]}`}>{children}</button>;
};

export default Button;
