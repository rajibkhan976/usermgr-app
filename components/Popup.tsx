import Button from "./Button";

type PopupProps = {
  show: boolean;
  handleShowModal: (status: boolean) => void;
};

const Popup = (props: PopupProps) => {
  const { show, handleShowModal } = props;

  return (
    <>
      {show && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="flex flex-column justify-content-center align-items-start">
              <label htmlFor="name">Name</label>
              <input
                type={"text"}
                id="name"
                className="w-100 p-1 my-1"
                placeholder={"Name"}
              />
            </div>
            <div className="flex flex-column justify-content-center align-items-start">
              <label htmlFor="email">Email</label>
              <input
                type={"email"}
                id="email"
                className="w-100 p-1 my-1"
                placeholder={"Email"}
              />
            </div>
            <div className="flex flex-column justify-content-center align-items-start">
              <label htmlFor="phone">Phone</label>
              <input
                type={"text"}
                id="phone"
                className="w-100 p-1 my-1"
                placeholder={"Phone"}
              />
            </div>
            <div className="flex justify-content-end">
              <Button onClick={() => handleShowModal(false)}>Cancel</Button>
              <Button>Add</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
