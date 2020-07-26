import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Komunitas from "./pages/Komunitas/Komunitas";
import Kota from "./pages/Kota/Kota";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Komunitas />
                    </Route>
                    <Route exact path="/kota/:id">
                        <Kota />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
