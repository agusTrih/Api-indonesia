import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

import "./App.css";
import Komunitas from "./pages/Komunitas/Komunitas";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Komunitas />
        </Provider>
    );
}

export default App;
