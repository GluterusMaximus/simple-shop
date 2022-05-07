import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
}

const preloadedState = {}

const middleware = [thunk]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})

export default store
