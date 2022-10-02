import Button from "./Button";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../store/actions/userActions";

type PopupProps = {
  show: boolean;
  handleShowModal: (status: boolean) => void;
  userActions: any;
};

const Popup = ({ show, handleShowModal, userActions }: PopupProps) => {
  return (
    <>
      {show && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <Formik
              initialValues={{ name: "", email: "", phone: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  Object.assign(errors, { name: "Required" });
                } else if (!/^\S[A-Z\s]+$/i.test(values.name)) {
                  Object.assign(errors, { name: "Error: Invalid name" });
                }
                if (!values.email) {
                  Object.assign(errors, { email: "Required" });
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  Object.assign(errors, { email: "Error: Invalid email" });
                }
                if (!values.phone) {
                  Object.assign(errors, { phone: "Required" });
                } else if (!/^[A-Z0-9+-]+$/i.test(values.phone)) {
                  Object.assign(errors, { phone: "Error: Invalid phone" });
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                userActions.addUser(values);
                handleShowModal(false);
                setSubmitting(false);
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

const mapDispatchToProps = (dispatch: any) => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Popup);
