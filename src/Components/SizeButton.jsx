import React from "react";

const SizeButton = ({ productDetails, setPSize }) => {
  return (
    <div className="text-xl flex-wrap md:flex items-center gap-3">
      <p>Size: </p>
      {productDetails?.size?.map((s, i) => (
        <button
          onClick={(e) => setPSize(e.target.innerText)}
          className="btn btn-outline mr-2 md:mr-0 mt-2 md:mt-0"
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;
