import React from "react";
import { cretaeStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers";
import thunk from "redux-thunk";

import "./App.css";

const store = cretaeStore(reducers, applyMiddleware(thunk));

function App() {
    return <Provider store={store}></Provider>;
}

export default App;
