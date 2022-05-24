// import { useState, useEffect } from "react";

// import CardList from "./components/card-list/card-list.component";
// import SearchBox from "./components/search-box/search-box.component";
// import "./App.css";
// import { getData } from "./utils/getData.utils";

// type monsters = {
//   id: string;
//   name: string;
//   email: string;
// };

// const App = () => {
//   const [searchField, setSearchField] = useState("");
//   const [monsters, setMonsters] = useState([]);
//   const [filteredMonsters, setFilterMonsters] = useState(monsters);

//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then((response) => response.json())
//     //   .then((users) => setMonsters(users));
//     const fetchUser = async () => {
//       const users = await getData<Array<monsters>>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//     };
//   }, []);

//   useEffect(() => {
//     const newFilteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     setFilterMonsters(newFilteredMonsters);
//   }, [monsters, searchField]);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   return (
//     <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>

//       <SearchBox
//         className="monsters-search-box"
//         onChangeHandler={onSearchChange}
//         placeholder="search monsters"
//       />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// };
const App = () => {};
export default App;
