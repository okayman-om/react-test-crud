import { useState } from "react";

const TheForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addUser({ name, username });
  };
  return (
    <div className="card mb-3">
      <h5 className="card-header">Add User</h5>
      <div className="card-body">
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              // value={name}
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={onSubmit}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheForm;
