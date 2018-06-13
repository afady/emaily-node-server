import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";

import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  {},
  compose(applyMiddleware(routerMiddleware(history), reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector("#root")
);
