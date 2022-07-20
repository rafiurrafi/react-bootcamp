const BUTTON_TYPES = {
  google: "google",
  inverted: "inverted",
};

const Button = ({ type, children, ...props }) => {
  return (
    <button className={`${BUTTON_TYPES[type]} button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
