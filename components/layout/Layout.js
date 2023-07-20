import Head from "next/head";
import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({
  children,
  title = "Book Best Hotels for your Holiday",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </div>
  );
};
