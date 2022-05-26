import { createContext, useReducer } from "react";
import PageReducer from "./PageReducer";

const INITIAL_STATE = {
    pages: [],
    isFetching: false,
    error: false,
};

export const PageContext = createContext(INITIAL_STATE)

export const PageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PageReducer, INITIAL_STATE);

    return (
        <PageContext.Provider 
            value={{
                pages: state.pages,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
                {children}
        </PageContext.Provider>
    );
}