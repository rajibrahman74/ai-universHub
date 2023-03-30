import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);
  return <div></div>;
};

export default Card;