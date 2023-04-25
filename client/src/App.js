import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
