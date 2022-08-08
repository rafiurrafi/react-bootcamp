import "./search-box.styles.css";
interface ISearchboxProps {
  className: string;
  placeholder?: string;
}
interface ISearchboxProps {
  onChangeHandler: () => void;
}
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchboxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
