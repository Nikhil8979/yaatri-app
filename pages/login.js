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

export const getServerSideProps = (context) => {
  const token = context.req.headers.cookie.split("token=")[1];
  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default login;
