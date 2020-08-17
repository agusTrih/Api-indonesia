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
import Kecamatan from "./pages/Kecamatan/Kecamatan";
import Kelurahan from "./pages/Kelurahan/Kelurahan";

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
                    <Route exact path="/kecamatan/:id">
                        <Kecamatan />
                    </Route>
                    <Route exact path="/kelurahan/:id">
                        <Kelurahan />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
