import React, { useState } from "react";

import Navbar from "./navbar";
import Header from "./header";
import AnimalMain from "./animal_main";
import Footer from "./footer";

const AnimalLayout: React.FC = () => {
  const [catCount, setCatCount] = useState<number>(0);
  const [dogCount, setDogCount] = useState<number>(0);

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />
      <AnimalMain
        catCount={catCount}
        setCatCount={setCatCount}
        dogCount={dogCount}
        setDogCount={setDogCount}
      />
      <Footer />
    </>
  );
};

export default AnimalLayout;
