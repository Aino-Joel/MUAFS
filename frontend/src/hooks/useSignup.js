import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Navigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (fName, lName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://muafs-backend.onrender.com/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fName, lName, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update AuthConext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);

      <Navigate to="/hostel-details" />;
    }
  };

  return { signup, isLoading, error };
};
