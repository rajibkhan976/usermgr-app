import SearchBox from "./SearchBox";
import Button from "./Button";

type TopBarProps = {
  searchKey: string;
  handleOnChange: (value: string) => void;
  handleShowModal: (status: boolean) => void;
};

const TopBar = (props: TopBarProps) => {
  const { searchKey, handleOnChange, handleShowModal } = props;

  return (
    <div className={"topbar-container"}>
      <div className={"topbar-row"}>
        <SearchBox searchKey={searchKey} handleOnChange={handleOnChange} />
        <Button onClick={() => handleShowModal(true)}>Add</Button>
      </div>
    </div>
  );
};

export default TopBar;
