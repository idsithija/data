const PageReducer = (state,action) => {
    switch (action.type){
        case "GET_PAGES_START":
            return {
                pages: [],
                isFetching: true,
                error: false,
            };
        case "GET_PAGES_SUCCESS":
            return {
                pages: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_PAGES_FAILURE":
            return {
                pages: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_PAGES_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
            case "CREATE_PAGES_SUCCESS":
            return {
                pages: [...state.pages, action.payload],
                isFetching: false,
                error: false,
            };
            case "CREATE_PAGES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return{...state};
    }
}

export default PageReducer;