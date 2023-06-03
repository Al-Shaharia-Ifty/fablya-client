import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ImageGallery from "react-image-gallery";
import SizeButton from "../Components/SizeButton";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const ProductPage = () => {
  const { user } = useContext(AuthContext);

  const params = useParams();

  const [quantityNumber, setQuantityNumber] = useState(1);
  const [pSize, setPSize] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoading, data: productDetails } = useQuery({
    queryKey: "productDetails",
    queryFn: () =>
      fetch(`https://fablya-server.vercel.app/product/${params.id}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading || loading) {
    return <Loading />;
  }

  let productSize;
  if (pSize !== "") {
    productSize = (
      <p className="mb-5 ">
        Your selected size is{" "}
        <span className="text-blue-500 font-bold">{pSize}</span>
      </p>
    );
  }

  const handleAddToCart = () => {
    if (user) {
      if (quantityNumber > 0 && pSize) {
        // add to cart start

        setLoading(true);
        const cartInfo = {
          email: user?.email,
          image: productDetails?.images[0]?.thumbnail,
          name: productDetails?.name,
          size: pSize,
          price: productDetails?.amount,
          quantity: quantityNumber,
        };
        fetch(`http://localhost:5000/addToCart/${productDetails?._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(cartInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            Swal.fire("Add cart Successfully", "", "success");
          });
        setLoading(false);
      } else if (!pSize) {
        Swal.fire("please select size", "", "error");
      } else if (quantityNumber === "" || quantityNumber !== typeof number) {
        Swal.fire("Please add quantity", "", "error");
      }
    } else {
      Swal.fire("Please login first", "", "error");
    }
  };

  return (
    <div>
      <div className="flex justify-center overflow-hidden">
        <div className="max-w-[2000px] w-full xl:px-10 2xl:px-20 px-5 py-5">
          <div className="flex gap-2">
            <Link to={"/"}>Home</Link>
            <p>/</p>
            <div>
              <Link to={`/category/${productDetails?.category}`}>
                {productDetails?.category === "mens_panjabi" && (
                  <p>Mens Panjabi</p>
                )}
                {productDetails?.category === "womens_kurti" && (
                  <p>Womens Kurti</p>
                )}
                {productDetails?.category === "womens_3pcs" && (
                  <p>Womens 3 PCS</p>
                )}
                {productDetails?.category === "boys_collection" && (
                  <p>Boys Collection</p>
                )}
                {productDetails?.category === "girls_collection" && (
                  <p>Girl Collection</p>
                )}
                {productDetails?.category === "mens" && <p>Mens</p>}
                {productDetails?.category === "womens" && <p>Womens</p>}
                {productDetails?.category === "kids" && <p>Kids</p>}
              </Link>
            </div>
          </div>
          <div className="lg:flex mt-5 gap-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aso-delay="500"
              className="lg:w-1/2 w-full"
            >
              <ImageGallery
                thumbnailPosition={"left"}
                showFullscreenButton={false}
                showNav={false}
                showPlayButton={false}
                items={productDetails?.images}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aso-delay="500"
              className="lg:w-1/2 w-full mt-5 lg:mt-0"
            >
              <h1 className="text-2xl font-normal">{productDetails?.name}</h1>
              <div className="text-3xl font-bold mt-2">
                ৳ <del className="text-red-500">{productDetails?.offPrice}</del>{" "}
                {productDetails?.amount}
              </div>
              <div className="border-dashed border-y-2 border-gray-300 py-3 mb-5 text-xl font-normal mt-5">
                <p>Color: {productDetails?.color}</p>
              </div>

              {productSize}
              {/* component */}
              <SizeButton productDetails={productDetails} setPSize={setPSize} />
              <div className="flex mt-5 text-xl items-center gap-3">
                <p>Quantity </p>
                <button
                  onClick={() => {
                    if (quantityNumber > 1) {
                      setQuantityNumber(parseInt(quantityNumber) - 1);
                    }
                  }}
                  className="btn btn-outline"
                >
                  -
                </button>
                <input
                  type="text"
                  onWheel={(e) => e.target.blur()}
                  className="border-2 rounded-lg w-14 h-14 p-2"
                  value={quantityNumber}
                  onChange={(e) => setQuantityNumber(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (pSize) {
                      if (quantityNumber > 0) {
                        setQuantityNumber(parseInt(quantityNumber) + 1);
                      } else if (
                        quantityNumber === "" ||
                        quantityNumber !== typeof number
                      ) {
                        setQuantityNumber(1);
                      }
                    } else {
                      Swal.fire("Please select size", "", "error");
                    }
                  }}
                  className="btn btn-outline"
                >
                  +
                </button>
              </div>
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-outline text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500"
                >
                  Add to cart
                </button>
                <button className="btn btn-outline text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500">
                  Buy Now
                </button>
                <button className="btn btn-outline text-gray-500 hover:bg-gray-500 hover:text-white hover:border-gray-500">
                  <i className="fa-regular fa-heart text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
