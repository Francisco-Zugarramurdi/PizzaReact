import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart-reducer'
import favouritesReducer from './favourites-reducer'
const persistConfig = {
    key:'root',
    storage: storage,
    whitelist:['cart']

}

const rootReducer = combineReducers({
    cart:cartReducer,
    favourites:favouritesReducer
})

export default persistReducer(persistConfig,rootReducer)