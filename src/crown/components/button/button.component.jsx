const Button = ({ children, type }) => {
  const BUTTON_TYPES = {
    google_sign_in: "google-sign-in",
    inverted: "inverted",
  };
  return <button className={`btn ${BUTTON_TYPES[type]}`}>{children}</button>;
};

export default Button;
