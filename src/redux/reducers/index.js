import { combineReducers } from "redux";
import komunitas from "./komunitas";
import kota from "./kota";
import kecamatan from "./kecamatan";
export default combineReducers({ komunitas, kota, kecamatan });
