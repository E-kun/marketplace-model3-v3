// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Resource from "./components/Resource";
import Login from "./pages/Login";
import CreateResource from "./pages/CreateResource";
import UpdateResource from "./pages/UpdateResource";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import UserOnlyPages from "./pages/UserOnlyPages";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="resource" element={<Resource />} />
            <Route path="catalogue/:resourceId" element={<Resource />} />
            <Route
              element={
                <ProtectedRoute>
                  <UserOnlyPages />
                </ProtectedRoute>
              }
            >
              <Route path="profile" element={<Profile />} />
              <Route path="createResource" element={<CreateResource />} />
              <Route path="updateResource" element={<UpdateResource />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
