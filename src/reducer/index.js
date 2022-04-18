import { combineReducers } from "redux";
import { CountryItem } from "./CountryItem";
import { AllBrand } from "./AllBrand";
import { CountryBrand } from "./CountryBrand";
import { ImageBrand } from "./ImageBrand";
const rootReducer = combineReducers({
    CountryItem,
    AllBrand,
    CountryBrand,
    ImageBrand,
})

export default rootReducer;