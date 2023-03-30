import React from "react";

const Data = (props) => {
  console.log(props.singleData);
  const { image, fetures, published_in, name } = props.singleData;
  return (
    <React.Fragment>
      <div className="card w-96 mx-auto bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full h-64"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Data;
