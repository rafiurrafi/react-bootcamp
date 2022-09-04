import SplitScreen from "./split-screen";
const Left = () => <h1 style={{ backgroundColor: "red" }}>Left</h1>;
const Right = () => <h1 style={{ backgroundColor: "green" }}>Right</h1>;
const App = () => {
  return (
    <div>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <Left />
        <Right />
      </SplitScreen>
    </div>
  );
};

export default App;
