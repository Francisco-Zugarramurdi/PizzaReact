import { favouriteProducts } from "../Data/products";
const INITIAL_STATE = {
    favourites: favouriteProducts(),
};
const favouritesReducer = () =>{
    return INITIAL_STATE;
}

export default favouritesReducer