import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { myReducer } from "./my-reducer";

// const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const MyContext = createContext();

  const [state, dispatch] = useReducer(myReducer, { shopBasket: [] ,name:'hello context'});
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
