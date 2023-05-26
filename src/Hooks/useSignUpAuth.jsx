import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const useSignUpAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { createUser } = useContext(AuthContext);

  const signUpWithEmail = (data) => {
    setLoading(true);
    createUser(data.email, data.password)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        const email = user?.email;
        const name = data.name;
        const currentUser = { email: email, name: name };
        if (name) {
          fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              const accessToken = data.token;
              localStorage.setItem("accessToken", accessToken);
              if (accessToken) {
                navigate(from, { replace: true });
              }
            });
        }
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return [loading, error, signUpWithEmail];
};

export default useSignUpAuth;
