import RenderList from "./render-list";
import SmallList from "./people/small-list";
import LargeList from "./people/large-list";
import Modal from "./modal";
import { printProps } from "./print-props";

const people = [
  {
    name: "A",
    age: 10,
    hobbies: ["A", "B", "C"],
  },
  {
    name: "AV",
    age: 10,
    hobbies: ["A", "B", "C"],
  },
  {
    name: "CA",
    age: 10,
    hobbies: ["A", "B", "C"],
  },
];
const App = () => {
  const Wrapper = printProps(SmallList);
  return (
    <div>
      <Wrapper />
    </div>
  );
};

export default App;
