import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
   BaseQueryFn,
   FetchArgs,
   FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import type { RootState } from '../store'

const baseQuery = fetchBaseQuery({
   baseUrl: import.meta.env.VITE_BASE_API_URL,
   prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token

      if (token) {
         headers.set('authorization', `Bearer ${token}`)
         headers.set('Accept', 'application/json')
      }
      return headers
   },
})

// Оборачиваем `baseQuery` для перехвата ошибок (например, 401 Unauthorized)
const baseQueryWithInterceptor: BaseQueryFn<
   string | FetchArgs,
   unknown,
   FetchBaseQueryError
> = async (args, api, extraOptions) => {
   const result = await baseQuery(args, api, extraOptions)

   if (result.error && result.error.status === 401) {
      console.warn('Токен истек! Необходимо обновить или выйти из системы.')
      // Здесь можно выполнить выход пользователя или рефреш токена
   } else if (result.error && result.error.status === 403) {
      console.warn('🚫 Доступ запрещен!')
   } else if (result.error && result.error.status === 404) {
      console.warn('🔍 Ресурс не найден.')
   } else if (result.error && result.error.status === 500) {
      console.warn('🔥 Ошибка сервера, попробуйте позже.')
   }
   return result
}

export const baseApi = createApi({
   reducerPath: 'baseApi',
   baseQuery: baseQueryWithInterceptor,
   tagTypes: ['Users'], // Используем теги для обновления данных в заднем фоне
   endpoints: () => ({}),
})
