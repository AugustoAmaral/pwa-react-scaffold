import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes/Router";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};
render(Router);

if (module.hot) {
  module.hot.accept("./routes/Router", () => {
    const NextApp = require("./routes/Router").default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
