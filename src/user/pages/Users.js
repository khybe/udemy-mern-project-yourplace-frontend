import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://www.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg",
      places: 2,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
