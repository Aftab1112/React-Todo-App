import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "./Loader";

const Profile = () => {
  const { loading, user } = useContext(Context);
  console.log(user);
  return loading ? (
    <Loader />
  ) : (
    <div className="todosContainer">
      <h1>Name : {user?.name}</h1>
      <h2>Email : {user?.email}</h2>
    </div>
  );
};

export default Profile;
