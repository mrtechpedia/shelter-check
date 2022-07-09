import React from "react";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children }) => {
  const authenticatedUser = useSelector((state) => state.auth.user);
  console.log("User is ", authenticatedUser);
  return (
    <div>
      {authenticatedUser ? (
        <h1>Hiiiii I am {authenticatedUser.username}</h1>
      ) : (
        <h1>Hiiiiiii I am not signed in!! </h1>
      )}
    </div>
  );
  // return authenticatedUser ? children : <Redirect to="/login" />;
};
