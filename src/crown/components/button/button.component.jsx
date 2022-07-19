const BUTTON_TYPES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};
const Button = ({ type = "base", children, ...props }) => {
  return (
    <button className={`${BUTTON_TYPES[type]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
