import "./styles.css";
import Header from "./TheHeader";
import Form from "./TheForm";
import { useState } from "react";
import ViewUser from "./ViewUser";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ricardo Genus",
      username: "sec_ric"
    },
    {
      id: 2,
      name: "James Murray",
      username: "jame_murr"
    }
  ]);

  //adding users
  const addUser = (user) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
    console.log(user);
  };
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Form addUser={addUser}></Form>
        <ViewUser users={users}></ViewUser>
      </div>
    </div>
  );
};

export default App;
