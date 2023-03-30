import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Button>Sort By Date</Button>
      <Card />
    </React.Fragment>
  );
};

export default App;
