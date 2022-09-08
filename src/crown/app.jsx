import Onboarding from "./onboarding";

const Step = ({ gotoNext }) => (
  <div>
    <h1>Step1</h1>
    <button onClick={gotoNext}>Next</button>
  </div>
);
const Step1 = ({ gotoNext }) => (
  <div>
    <h1>Step2</h1>
    <button onClick={gotoNext}>Next</button>
  </div>
);
const Step2 = ({ gotoNext }) => (
  <div>
    <h1>Step3</h1>
    <button onClick={gotoNext}>Next</button>
  </div>
);
const App = () => {
  return (
    <Onboarding>
      <Step />
      <Step1 />
      <Step2 />
    </Onboarding>
  );
};

export default App;
