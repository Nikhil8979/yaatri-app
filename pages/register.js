import React from "react";
import { Layout } from "../components/layout/Layout";
import Register from "../components/auth/Register";

const register = () => {
  return (
    <>
      <Layout title="Register User">
        <Register />
      </Layout>
    </>
  );
};
export default register;
