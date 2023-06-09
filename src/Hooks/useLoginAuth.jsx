import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const useLoginAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const loginWithEmail = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        const email = user?.email;
        const currentUser = { email: email };
        if (email) {
          fetch(`https://fablya-server.vercel.app/user/${email}`, {
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
                navigate("/");
              }
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  return [loading, error, loginWithEmail];
};

export default useLoginAuth;
