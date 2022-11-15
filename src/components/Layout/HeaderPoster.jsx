import React from "react";
import img from "../../assets/food_poster.jpg";


const HeaderPoster = () => {
  return (
    <div className="row">
      <img className="img-fluid p-0" src={img} alt="پوستر رستوران" />
    </div>
  );
};

export default HeaderPoster;
