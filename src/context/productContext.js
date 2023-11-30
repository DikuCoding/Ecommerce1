
import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"
// import { ThemeConsumer, ThemeProvider } from "styled-components"

// create a Context
// Provider
// Consumer => useContext Hook
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

const AppProvider = ({children}) =>{
    const [state, dispatch] =useReducer(reducer, initialState);

const getProducts= async(url) =>{
    dispatch({type: "SET_LOADING"});
    try {
        const res = await axios.get(url);
        // console.log("File : productcontext.js ~line 10~getproducts ~res", res);
        const products = await res.data;
        // console.log("File: productContext.js ~ Line ~ getproducts ~ products", products);
        dispatch({type:"SET_API_DATA", payload:products});
    } catch (error) {
        dispatch({type: "API_ERROR"});
    }
};

 // my 2nd api call for single product

 const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

    useEffect(()=>{
        getProducts(API);
    },[]);

    return (<AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>)
};

// Creating custom hooks

const useProductContext = ()=>{
    return  useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext} ;