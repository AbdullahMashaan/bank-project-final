import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS for styling
import "../App.css";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { checkToken } from "../api/storage";

const Login = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (formData) => login(formData),
    onSuccess: () => navigate("/home"),
  });

  const handleSubmit = (values) => {
    mutation.mutate({
      username: values.username,
      password: values.password,
    });
  };

  return (
    <div className="App">
      <div className="login-container d-flex align-items-center flex-column pt-5 pb-5">
        <h3>Log in to your account</h3>
        <h5 className="mb-4">
          if you don't have an account,{" "}
          <NavLink to={"/register"}>Register here</NavLink>{" "}
        </h5>
        <Formik
          className="container "
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className=" row m-2">
            <Field
              className="col-12 mb-3 p-2"
              type="text"
              name="username"
              placeholder="example.com"
            />
            <Field
              className="col-12 mb-3 p-2"
              type="password"
              name="password"
              placeholder="********"
            />
            <button type="submit" className=" btn login-button">
              Log in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
