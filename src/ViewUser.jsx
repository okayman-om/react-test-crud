import { useState } from "react";
import User from "./User";

const ViewUser = ({ users }) => {
  console.log(users.length);
  users.map((user) => console.log(user.name));

  return (
    <div className="card">
      <h5 className="card-header">View User</h5>
      <div className="card-body">
        <ul className="list-group">
          {users.length > 0
            ? users.map((user) => <User key={user.id} users={user}></User>)
            : "No users found"}
        </ul>
      </div>
    </div>
  );
};

export default ViewUser;
