export const Types = {
  GET_ALL_REQUEST: 'GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
  GET_ALL_ERROR: 'GET_ALL_ERROR',
};

const INITIAL_STATE = {
  popularMovies: [],
  topRated: [],
  loading: false,
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_REQUEST:
      return {...state, loading: true};
    case Types.GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload.popular,
        topRated: action.payload.topRated,
      };
    case Types.GET_ALL_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
}

export const Creators = {
  getAllMovies: () => ({
    type: Types.GET_ALL_REQUEST,
  }),
  getAllMoviesSuccess: (popular, topRated) => ({
    type: Types.GET_ALL_SUCCESS,
    payload: {popular, topRated},
  }),
  getAllMoviesError: () => ({
    type: Types.GET_ALL_ERROR,
  }),
};
