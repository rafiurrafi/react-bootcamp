const FormInput = ({ label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor="displayName">{label}</label>}
      <input {...props} />
    </div>
  );
};

export default FormInput;
