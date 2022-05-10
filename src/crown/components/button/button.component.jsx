const BUTTON_TYPE_CLASSES = {
    google : "google-sign-in",
    interted : "inverted"
}
const Button = ({children, buttonType}) => {
    return ( <button className={`${BUTTON_TYPE_CLASSES[buttonType]} button`}>{children}</button> );
}
 
export default Button;