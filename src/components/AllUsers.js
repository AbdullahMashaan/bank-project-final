import React from "react";
import { getAllUsers, transfertoUser } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "./User";

const AllUsers = () => {
  const { data, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: () => getAllUsers(),
  });

  const cleanData = data?.filter((user) => user !== null);
  
  const allusers = cleanData?.map((user) => (
    <User username={user.username} balance={user.balance} key={user.id} />
  ));

  return (
    <div className="App ">
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? <h1>Loading...</h1> : allusers}
      </div>
    </div>
  );
};

export default AllUsers;
