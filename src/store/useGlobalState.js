import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
      };
    default: {
      return state;
    }
  }
};


  const useGlobalState = () => {
    return useReducer(reducer, {
      isLoggedIn: false,
    });
  };

export default useGlobalState;
