import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Data from "../Data/Data";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [uniqueId, setUniqueId] = useState(null);
  const [showAll, setShowAll] = useState(true);

  const handleShowAll = () => {
    setShowAll(false);
  };

  useEffect( () => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then(data => setSingleData(data.data))
  },[uniqueId])

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
        {data.slice(0, showAll ? 6 : 12).map((singleData) => (
          <Data 
          singleData={singleData}
          key={singleData.id} 
          setUniqueId={setUniqueId}
          ></Data>
        ))}
      </div>

      {showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData}/>
    </React.Fragment>
  );
};

export default Card;