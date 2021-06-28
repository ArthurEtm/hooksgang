import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk"



const middleware = [thunk];

export const store =createStore(
    reducers,
    {},
    applyMiddleware(...middleware)
) 