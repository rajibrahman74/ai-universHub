import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Button>Sort By Date</Button>
      <Card />
      <Modal/>
    </React.Fragment>
  );
};

export default App;