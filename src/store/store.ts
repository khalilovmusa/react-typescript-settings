import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { baseApi } from './api/baseApi'
import rootReducer from './rootReducer'
import authReducer from './slices/authslice'
import counterReducer from './slices/counterSlice' // ⬅️ Добавили counterSlice

export const store = configureStore({
   reducer: {
      ...rootReducer,
      auth: authReducer,
      counter: counterReducer,
      [baseApi.reducerPath]: baseApi.reducer, // Добавляем API-редюсер отдельно
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false, // ⚡ Отключаем проверку сериализуемости (нужно для FormData, Date, Map)
      }).concat(baseApi.middleware),
   // devTools: process.env.NODE_ENV !== 'production', // Включаем Redux DevTools только в dev-режиме
})

// Включаем авто-подписку на refetch API при переключении вкладок
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
