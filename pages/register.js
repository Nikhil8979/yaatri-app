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
export default register;
