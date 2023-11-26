// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Resource from "./components/Resource";
import Login from "./pages/Login";
import CreateResource from "./pages/CreateResource";
import UpdateResource from "./pages/UpdateResource";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="resource" element={<Resource />} />
        <Route path="catalogue/:id" element={<Resource />} />
        <Route path="createResource" element={<CreateResource />} />
        <Route path="updateResource" element={<UpdateResource />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
