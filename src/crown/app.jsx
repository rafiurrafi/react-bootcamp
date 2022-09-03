import LargePeopleList from "./people/large.people.list";
import SmallPeopleList from "./people/small.people.list";
import RegularList from "./regular-list";
import Uncontrolled from "./uncontrolled";

const people = [
  {
    id: Symbol(),
    name: "A",
    age: 11,
    hairColor: "brown",
    hobbies: ["Dance", "sing"],
  },
  {
    id: Symbol(),
    name: "B",
    age: 12,
    hairColor: "brown",
    hobbies: ["Dance", "sing"],
  },
  {
    id: Symbol(),
    name: "C",
    age: 13,
    hairColor: "brown",
    hobbies: ["Dance", "sing"],
  },
  {
    id: Symbol(),
    name: "AQ",
    age: 14,
    hairColor: "brown",
    hobbies: ["Dance", "sing"],
  },
  {
    id: Symbol(),
    name: "AS",
    age: 1,
    hairColor: "brown",
    hobbies: ["Dance", "sing"],
  },
];
const products = [
  {
    name: "DAS",
    price: 12,
    description: "lorem lorem lorem lorem lorem lorem lorem ",
  },
];
const App = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPeopleList}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePeopleList}
      />
      <Uncontrolled />
    </>
  );
};

export default App;
