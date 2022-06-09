import React from "react";
import About__me from "../components/About__me";
import Header from "../components/Header";
import Header__section from "../components/Header__section";

export default function Home() {
  return (
    <>
      <Header />
      <Header__section />
      <About__me />
    </>
  );
}
