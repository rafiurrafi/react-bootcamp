import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps extends ISearchBoxHandler {
  className: string;
  placeholder: string;
}
interface ISearchBoxHandler {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
