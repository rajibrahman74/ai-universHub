import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Data from "../Data/Data";

const Card = () => {
  const [data, setData] = useState([]);

  const [showAll, setShowAll] = useState(true);
  const handleShowAll = () => {
    setShowAll(false);
  };

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
        {data.slice(0, showAll ? 6 : 12).map((singleData) => (
          <Data key={singleData.id} singleData={singleData}></Data>
        ))}
      </div>

      {showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
    </React.Fragment>
  );
};

export default Card;