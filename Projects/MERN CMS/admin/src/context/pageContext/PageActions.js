export const getPagesStart = () => ({
    type:"GET_PAGES_START",
});

export const getPagesSuccess = (pages) => ({
    type:"GET_PAGES_SUCCESS",
    payload: pages,
});

export const getPagesFailure = () => ({
    type:"GET_PAGES_FAILURE",
});

export const createPageStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createPageSuccess = (pages) => ({
type: "CREATE_MOVIE_SUCCESS",
payload: pages,
});

export const createPageFailure = () => ({
type: "CREATE_MOVIE_FAILURE",
});