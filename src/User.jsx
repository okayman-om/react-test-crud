const User = ({ users }) => {
  return (
    <li className="list-group-item">
      {console.log(users.name)}
      <p className="fw-bold">{users.name}</p>
      <p>{users.username}</p>
    </li>
  );
};

export default User;
