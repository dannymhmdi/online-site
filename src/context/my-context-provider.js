import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { myReducer } from "./my-reducer";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {


  const [state, dispatch] = useReducer(myReducer, {shopBasket:[] });
  return (
    <MyContext.Provider value={{ state , dispatch}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
