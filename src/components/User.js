import React from "react";
import profileImg from "../images/profile-user.png";
import { Formik, Form, Field } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transfertoUser } from "../api/auth";

function User({ username, balance }) {
  const queryClient = useQueryClient();


  const mutate = useMutation({
    mutationKey: ["transfer"],
    mutationFn: (formData) => transfertoUser(username, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });
  const handleSubmit = (values) => {
    console.log("values", values);
    mutate.mutate({
      amount: values.amount,
      username: values.username,
    });
  };
  return (
    <div className=" ">
      <div className="user-container">
        <div className="container py-5 ">
          <div className="mb-5 ">
            <img
              className="rounded-5"
              src={profileImg}
              width="100px"
              alt="User Profile"
            />
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h3>Username: </h3>
            </div>
            <div className="col-6">
              <h4 className="">{username} </h4>
            </div>

            <div className="row">
              <div className="col-6">
                <h3>Balance: </h3>
              </div>
              <div className="col-6  text-center d-flex ">
                <h3>
                  <label className="">{balance} </label>
                  <label className="mx-3  text-color">KWD</label>{" "}
                </h3>
              </div>
            </div>
          </div>
          <Formik
            className="container "
            initialValues={{ amount: 0, username: username }}
            onSubmit={(values, { resetForm} ) => {
              handleSubmit(values);
              resetForm ();
            }}
          >
            <Form className=" row mt-5">
              <label>Trasfer Amount</label>
              <Field
                className="px-2 col-12  mb-3 p-2"
                type="number"
                name="amount"
                placeholder="amount"
              />

              <button type="submit" className=" btn  login-button ">
                transfer
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default User;
