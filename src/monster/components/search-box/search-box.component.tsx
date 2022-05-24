import "./search-box.styles.css";
import { ChangeEventHandler } from "react";
interface ISearchBoxProps extends IChangeHandler {
  className: string;
  placeholder?: string;
}
interface IChangeHandler {
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
    // onChange={onChangeHandler}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
