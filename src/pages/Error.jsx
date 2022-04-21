import React from "react";

import notFoundImage from "../assets/images/notFound.svg";

import { Image } from "../components";

export const Error = () => {
  return (
    <section className="error">
      <div className="error-inner">
        <h1>Error. This page is not found</h1>
        <Image src={notFoundImage} width="250px" height="200px" />
      </div>
    </section>
  );
};
