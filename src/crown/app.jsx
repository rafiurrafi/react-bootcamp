import { useState } from "react";
import Modal from "./modal";
import LargeList from "./people/large-list";
import SmallList from "./people/small-list";
import RenderList from "./render-list";
import SplitScreen from "./split-screen";
import Uncontrolled from "./uncontrolled";

const people = [
  { name: "Max", age: 42, hobbies: ["Cricket", "Cooking"] },
  { name: "Min", age: 42, hobbies: ["Cricket", "Cooking"] },
  { name: "Small", age: 42, hobbies: ["Cricket", "Cooking"] },
  { name: "Big", age: 42, hobbies: ["Cricket", "Cooking"] },
];
const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <SplitScreen>
        <Left />
        <Right />
      </SplitScreen> */}
      {/* <RenderList items={people} component={SmallList} object="person" /> */}
      {/* <RenderList items={people} component={LargeList} object="person" /> */}
      <button onClick={() => setShowModal(true)}>Open</button>
      {showModal && (
        <Modal isOpen={showModal} onOpen={setShowModal}>
          <RenderList items={people} component={SmallList} object="person" />
        </Modal>
      )}
      <Uncontrolled />
    </div>
  );
};

export default App;
