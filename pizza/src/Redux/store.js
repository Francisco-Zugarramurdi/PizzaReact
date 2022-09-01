import {createStore} from 'redux'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist'
const initialState = {}
export const store = createStore(
    rootReducer,
    initialState,
    
)
export const persistor = persistStore(store);