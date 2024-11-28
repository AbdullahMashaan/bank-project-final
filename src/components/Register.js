import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate, useNavigation } from "react-router";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS for styling
import "../App.css";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (formData) => register(formData),
    onSuccess: () => navigate("/"),
  });

  const handleSubmit = (values) => {
    mutation.mutate({
      username: values.username,
      password: values.password,
      image: values.image,
    });
  };
  return (
    <div className="App">
      <div className="login-container  d-flex align-items-center  flex-column pt-5 pb-5">
        <h3>Register your account</h3>
        <h5 className="mb-4">
          if you have an account, <NavLink to={"/Login"}>Login here</NavLink>{" "}
        </h5>
        <Formik
          className="container "
          initialValues={{ username: "", password: "", image: "" }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className=" row m-2">
            <Field
              className="px-2 col-12  mb-3 p-2 "
              type="text"
              name="username"
              placeholder="example.com"
            />
            <Field
              className="px-2 col-12  mb-3 p-2"
              type="password"
              name="password"
              placeholder="********"
            />
            <Field
              className="px-2 py-1 col-12  mb-3 text-bg-light"
              type="file"
              name="image"
            />
            <button type="submit" className=" btn  login-button">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
