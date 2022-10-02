type SearchBoxProps = {
  searchKey: string;
  handleOnChange: (value: string) => void;
};

const SearchBox = (props: SearchBoxProps) => {
  const { searchKey, handleOnChange } = props;

  return (
    <input
      type={"text"}
      id="searchKey"
      className="w-50 p-1 my-1"
      value={searchKey}
      onChange={(event) => handleOnChange(event.target.value)}
      placeholder={"Search"}
    />
  );
};

export default SearchBox;
