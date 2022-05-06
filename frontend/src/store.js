import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const reducer = {}

const preloadedState = {}

const middleware = [thunk]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})

export default store
