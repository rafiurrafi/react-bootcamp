const Button = ({ text, type }) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google-sing-in",
    inverted: "inverted",
  };
  return <button className={`${BUTTON_TYPE_CLASSES[type]}`}>{text}</button>;
};

export default Button;
