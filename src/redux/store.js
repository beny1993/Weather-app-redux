import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddleWare from "redux-saga";
import weatherReducer from "./reducers/weather";
import weatherSaga from "./saga/weather";

const sagaMiddleWare = createSagaMiddleWare();
export const history = createBrowserHistory();

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    weather: weatherReducer,
  });

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers(history),
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleWare, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleWare.run(weatherSaga);
  return store;
}
