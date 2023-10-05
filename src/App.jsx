import React from "react";
import Navbar from "./common/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./common/Footer";
import ContextApp from "./context/ContextApp";

const App = () => {
  return (
    <div>
      <ContextApp  >
        <Navbar />
        <Home />
        <Footer />
      </ContextApp>
    </div>
  );
};

export default App;
