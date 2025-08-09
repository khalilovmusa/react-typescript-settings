import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlice'
import { baseApi } from './api/baseApi'

const rootReducer = combineReducers({
   [baseApi.reducerPath]: baseApi.reducer,
   counter: counterReducer,
})

export default rootReducer
