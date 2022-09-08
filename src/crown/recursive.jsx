const isObject = (x) => typeof x === "object" && x !== null;
const Recursive = ({ data }) => {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);
};

export default Recursive;
