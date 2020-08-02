import * as types from "./actionTypes";

export function getData(payload) {
  return {
    type: types.GET_WEATHER_DATA_REQUEST,
    payload,
  };
}

export function getDataPending() {
  return {
    type: types.GET_WEATHER_DATA_PENDING,
  };
}

export function getDataSuccess(payload) {
  return {
    type: types.GET_WEATHER_DATA_SUCCESS,
    payload,
  };
}

export function getDataFailed(payload) {
  return {
    type: types.GET_WEATHER_DATA_FAILED,
    payload,
  };
}
