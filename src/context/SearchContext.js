import { createContext, useReducer } from "react";

const initialState = {
  city: "",
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(initialState);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW SEARCH":
      return action.payload;
    case "RESET SEARCH":
      return initialState;
    default:
      return state;
  }
};


export const SearchContextProvider = ({children})=>{
   const [state, dispatch] = useReducer(SearchReducer, initialState)

   return (
      <SearchContext.Provider value={{city:state.city, dates:state.dates, options:state.options, dispatch}}>
         {children}
      </SearchContext.Provider>
   )
}