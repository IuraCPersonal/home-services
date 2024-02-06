"use client";

import * as React from "react";

import Header from "@/components/landing/header/header";

interface Props {
  children: React.ReactNode;
}

const DefaulyLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default DefaulyLayout;
