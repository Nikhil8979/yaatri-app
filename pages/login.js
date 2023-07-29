import React from "react";
import { Layout } from "../components/layout/Layout";
import Login from "../components/auth/Login";

const login = () => {
  return (
    <Layout title="Login">
      <Login />
    </Layout>
  );
};

export default login;
