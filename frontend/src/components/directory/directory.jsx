import MenuItem from "../menu-item/menuItem";

const Directory = (props) => {
  const items = [
    { _id: 1, title: "Jackets", linkUrl: "" },
    { _id: 2, title: "Hats", linkUrl: "hats" },
    { _id: 3, title: "Sneaker", linkUrl: "" },
    { _id: 4, title: "Men", linkUrl: "" },
    { _id: 5, title: "Women", linkUrl: "" },
  ];
  return (
    <div className="directory-menu">
      {items.map(({ _id, ...otherProps }) => (
        <MenuItem key={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
