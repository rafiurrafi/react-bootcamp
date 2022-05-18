const BUTTON_TYPE_CLASSES = {
  google: "google",
  inverted: "inverted",
};

const Button = ({ text, buttonType, ...props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
