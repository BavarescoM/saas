import React, { Fragment } from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
        <GlobalStyle />
      </Fragment>
    </Provider>
  );
}

export default App;
