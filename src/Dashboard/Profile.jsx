import React, { useContext, useState } from "react";
import { FetchContext } from "../Context/FetchProvider";

const Profile = () => {
  const { userInfo, refetch } = useContext(FetchContext);

  const { name, phoneNumber, email, address } = userInfo;

  const [userName, setUserName] = useState(name || "");
  const [number, setNumber] = useState(phoneNumber || "");
  const [emailAddress, setEmailAddress] = useState(email || "");
  const [addressDetails, setAddressDetails] = useState(address || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUserInfo = {
      name: userName,
      email: emailAddress,
      phoneNumber: number,
      address: addressDetails,
    };
    console.log(updateUserInfo);
    fetch("http://localhost:5000/updateUserInfo", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full xl:min-w-[1024px] lg:min-w-[700px] mx-5 lg:mx-0">
          <div className="flex justify-center">
            <h2 className="text-xl p-1 -mb-5 rounded-sm bg-gray-200">
              Profile Information
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-2 text-xl p-5 rounded-lg w-full pt-10"
          >
            <p className="">Name</p>
            <input
              className="input input-bordered w-full mt-3"
              type="text"
              value={userName}
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-5">
              <div>
                <p className="">Phone Number</p>
                <input
                  className="input input-bordered w-full mt-3"
                  type="number"
                  placeholder="User Phone Number"
                  onWheel={(e) => e.target.blur()}
                  value={number}
                  disabled={phoneNumber ? true : false}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {!number && (
                  <p className="text-xs text-red-500 mt-2">
                    Please Add your Phone Number Carefully. It can never be
                    changed
                  </p>
                )}
              </div>
              <div>
                <p className="">Email</p>
                <input
                  className="input input-bordered w-full mt-3"
                  type="email"
                  placeholder="Email Address"
                  value={emailAddress}
                  disabled={email ? true : false}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                {!email && (
                  <p className="text-xs text-red-500 mt-2">
                    Please Add your Email address Carefully. It can never be
                    changed
                  </p>
                )}
              </div>
            </div>
            <p className="mt-5">Address</p>
            <textarea
              className="textarea textarea-bordered min-h-[110px] max-h-[180px] w-full mt-3"
              type="text"
              value={addressDetails}
              placeholder="Address Details"
              onChange={(e) => setAddressDetails(e.target.value)}
            />
            <div className="flex justify-end">
              <button className="btn ">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
