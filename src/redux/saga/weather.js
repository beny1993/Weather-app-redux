import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import * as actions from "../actions/action";
import weatherApi from "../api/weather";
import { toast } from "react-toastify";

export function* getData(action) {
  const { payload } = action;
  yield put(actions.getDataPending());
  const response = yield call(weatherApi.getData, {
    cityId: payload.cityId,
  });
  const { data } = response;
  if ("status" in data) {
    const { status, message } = data;
    yield toast(message, {
      type: status,
    });
    yield put(
      actions.getDataFailed({
        error: message,
      })
    );
  } else {
    yield put(
      actions.getDataSuccess({
        cityData: data.main,
        cityId: payload.cityId,
      })
    );
  }
}

export default function* weatherWatcher() {
  yield takeLatest(types.GET_WEATHER_DATA_REQUEST, getData);
}
