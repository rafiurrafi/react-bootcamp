import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps extends IChnageHandlerProps {
  className: string;
  placeholder: string;
}

interface IChnageHandlerProps {
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => boolean;
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
