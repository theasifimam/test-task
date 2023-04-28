import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Layout from "./components/Layout";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [reRenderUsers, setReRenderUsers] = useState(false);
  useEffect(() => {
    const users = async () => {
      const response = await fetch("http://localhost:5000/all-users");
      const result = await response.json();
      setUsersList(result.users);
    };
    users();
  }, [reRenderUsers]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Users usersList={usersList} />} />
          <Route
            path="/add-user"
            element={<AddUser setReRenderUsers={setReRenderUsers} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
