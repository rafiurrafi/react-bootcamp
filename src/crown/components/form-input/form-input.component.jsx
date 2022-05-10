import "./form-input.style.scss"
const FormInput = ({label, ...otherProps}) => {
    return ( 
        <div>
             <label htmlFor="" className={`${otherProps.value.length ? 'shrink' : ""} form-input-label`}>{label}</label>
             <input {...otherProps} /> <br />
               
        </div>
     );
}
 
export default FormInput;