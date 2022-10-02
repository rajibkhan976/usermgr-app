import Button from "./Button";
import { Formik } from "formik";

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
            <Formik
              initialValues={{ name: "", email: "", phone: "" }}
              validate={(values) => {
                const errors = { name: "", email: "", phone: "" };
                if (!values.name) {
                  errors.name = "Required";
                } else if (!/^[A-Z]+$/i.test(values.name)) {
                  errors.name = "Error: Invalid name";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Error: Invalid email";
                }
                if (!values.phone) {
                  errors.phone = "Required";
                } else if (!/^[A-Z0-9+-]+$/i.test(values.phone)) {
                  errors.phone = "Error: Invalid phone";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-column justify-content-center align-items-start">
                    <label htmlFor="name">Name</label>
                    <input
                      type={"text"}
                      name="name"
                      id="name"
                      className="w-100 p-1 my-1"
                      placeholder={"Name"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className="flex flex-column justify-content-center align-items-start">
                    <label htmlFor="email">Email</label>
                    <input
                      type={"email"}
                      name="email"
                      id="email"
                      className="w-100 p-1 my-1"
                      placeholder={"Email"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="flex flex-column justify-content-center align-items-start">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type={"text"}
                      name="phone"
                      id="phone"
                      className="w-100 p-1 my-1"
                      placeholder={"Phone"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      required
                    />
                    {errors.phone && touched.phone && errors.phone}
                  </div>
                  <div className="flex justify-content-sm-center justify-content-md-end">
                    <Button onClick={() => handleShowModal(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      Add
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
