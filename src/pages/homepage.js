import React, { useEffect } from "react";

import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";
import HPCenter from "../componets/homepage/hpcenter";

const Homepage = () => {
  useEffect(() => {
    if (localStorage.getItem("Part1")) {
      window.scrollTo(0, 0);
    } else {
      localStorage.setItem("isAuth", "false");
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <HPCenter />
      <Footer />
    </div>
  );
};

export default Homepage;
