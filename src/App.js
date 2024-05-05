import React, { Fragment } from "react";

import Header from "./components/Header";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
