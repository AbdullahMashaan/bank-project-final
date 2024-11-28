import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { profile, updateProfileImage } from "../api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import profileImg from "../images/profile-user.png";

const Profile = () => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profile(),
  });

  const { username, image, balance } = data || {};

  const [file, setFile] = useState();
  const mutation = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: (formData) => updateProfileImage(formData),
  });
  const handleSubmit = async (values) => {
    console.log(values.image); 
    const formData = new FormData();
    formData.append("image", file); 
    mutation.mutate(formData); 
  };

  return (
    <div className="App ">
      <div className="home-container">
        <div className="container  py-5 ">
          <div className="mb-5 ">
            <img
              className="rounded-5"
              src={
                image === ""
                  ? profileImg
                  : "https://react-bank-project.eapi.joincoded.com/" + image
              }
              width="100px"
              alt="User Profile"
            />{" "}
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h3>Username: </h3>
            </div>
            <div className="col-6">
              <h3 className="">{username} </h3>
            </div>

            <div className="row">
              <div className="col-6">
                <h3>Balance: </h3>
              </div>
              <div className="col-6  text-center">
                <h3>
                  <label className="">{balance} </label>
                  <label className="mx-3  text-color">KWD</label>{" "}
                </h3>
              </div>
            </div>

            <Formik
              className="container "
              initialValues={{ image: "" }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Form className="d-flex flex-column m-2">
                <label>update your image</label>
                <Field
                  className="px-2 py-1 mb-3 text-bg-light"
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFile(event?.target?.files[0]);
                  }}
                />
                <button type="submit" className=" btn  login-button">
                  Save
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
