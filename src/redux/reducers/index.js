import { combineReducers } from "redux";
import komunitas from "./komunitas";
import kota from "./kota";
import kecamatan from "./kecamatan";
import kelurahan from "./kelurahan";
export default combineReducers({ komunitas, kota, kecamatan, kelurahan });
