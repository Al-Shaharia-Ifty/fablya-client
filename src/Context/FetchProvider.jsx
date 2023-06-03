import React, { createContext } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

export const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () =>
      fetch(`https://fablya-server.vercel.app/userInfo`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  const fetchDetails = {
    userInfo,
    isLoading,
    refetch,
  };

  return (
    <FetchContext.Provider value={fetchDetails}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;
