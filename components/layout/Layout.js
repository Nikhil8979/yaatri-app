import Head from "next/head";
import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

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
      {children}
      <Footer />
    </div>
  );
};
