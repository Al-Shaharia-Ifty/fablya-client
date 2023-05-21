import React from "react";
import img from "../Assets/loading.gif";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Loading;
