const Button = ({ children, type }) => {
  const BUTTON_TYPE = {
    google: "google",
    inverted: "inverted",
  };
  return <button className={`${BUTTON_TYPE[type]} btn`}>{children}</button>;
};

export default Button;
