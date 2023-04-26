import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Layout from "./components/Layout";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  // useEffect(() => {
  //   const users = async () => {
  //     const response = fetch("http://localhost:5000/all-users");
  //     const result = await response.json();
  //     setUsersList(result);
  //   };
  //   users();
  // });

  console.log(usersList);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Users usersList={usersList} />} />
          <Route path="/add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
