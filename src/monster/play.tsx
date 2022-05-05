const name: string = "121";

const f: (a: string, b: number, c: null) => boolean = (a, b, c) => {
  return true;
};

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}
interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => {
  return <input />;
};
