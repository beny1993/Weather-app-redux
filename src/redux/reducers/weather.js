import * as types from "../actions/actionTypes";

const initialState = {
  loading: false,
  currentCityData: {},
  searchHistory: [],
  error: "",
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    // case types.GET_WEATHER_DATA_REQUEST:
    //   return {
    //     ...state,
    //     searchHistory: [...state.searchHistory, action.payload.cityId],
    //   };
    case types.GET_WEATHER_DATA_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        currentCityData: action.payload.cityData,
        loading: false,
        searchHistory: [...state.searchHistory, action.payload.cityId],
      };
    case types.GET_WEATHER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
