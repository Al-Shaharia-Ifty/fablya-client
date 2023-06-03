import { RecaptchaVerifier } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../firebase.init";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../Shared/LoadingButton";

const PhoneNumberLogin = () => {
  const countryCode = "+880";

  const navigate = useNavigate();

  const { createPhoneUser } = useContext(AuthContext);

  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [loading, setLoading] = useState(false);

  const genrateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      genrateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      createPhoneUser(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log(phoneNumber, phoneNumber.length);
    }
  };

  const verifierOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      setLoading(true);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          setLoading(false);
          const user = result.user;
          const currentUser = { phoneNumber: phoneNumber };
          if (user) {
            fetch(
              `https://fablya-server.vercel.app/phone_user/${phoneNumber}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                const accessToken = data.token;
                localStorage.setItem("accessToken", accessToken);
                if (accessToken) {
                  navigate("/");
                }
              });
          }
        })
        .catch((error) => {
          console.log(error.message);
          setPhoneError(error.message);
        });
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <form
          className="w-full max-w-sm my-10 border-2 p-5 rounded-lg hover:shadow-2xl duration-300"
          onSubmit={requestOTP}
        >
          <h1 className="text-xl">Sign in with phone number </h1>
          <div className="mb-3">
            <p className="text-lg mb-3 mt-5">Phone number</p>

            <input
              type="tel"
              className="input input-bordered w-full"
              placeholder="Phone number with country code"
              id="phoneNumberInput"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              aria-describedby=""
            />
            {phoneError && <p className="text-red-500">{phoneError}</p>}
            <input
              type="submit"
              value="submit"
              className="btn btn-outline w-full mt-3"
            />
          </div>
          {expandForm === true ? (
            <>
              <div className="mb-3">
                <p className="text-lg mb-3 mt-5">OTP</p>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  id="otpInput"
                  value={OTP}
                  onChange={verifierOTP}
                />
                {loading && <LoadingButton></LoadingButton>}
                <div id="otpHelp">
                  Please enter the one time pin sent to your phone
                </div>
              </div>
            </>
          ) : null}
          <div className="" id="recaptcha-container"></div>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberLogin;
