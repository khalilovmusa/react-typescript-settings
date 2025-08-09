import type { EndpointBuilder } from '@reduxjs/toolkit/query/react'
import type {
   BaseQueryFn,
   FetchArgs,
   FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import type { User } from '@models/userTypes.ts'

import { baseApi } from '../baseApi.ts'
import type { AppDispatch } from '../../store.ts'

export const usersApi = baseApi.injectEndpoints({
   endpoints: (
      builder: EndpointBuilder<
         BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
         'Users',
         'baseApi'
      >,
   ) => ({
      getUsers: builder.query<User[], void>({
         query: () => '/users',
         providesTags: ['Users'],
      }),
      addUser: builder.mutation<User, { id: number; name: string }>({
         query: (newUser: { id: number; name: string }) => ({
            url: '/users',
            method: 'POST',
            body: newUser,
         }),
         async onQueryStarted(
            newUser: { id: number; name: string },
            {
               dispatch,
               queryFulfilled,
            }: {
               dispatch: AppDispatch
               queryFulfilled: Promise<{ data: User }>
            },
         ) {
            const patchResult = dispatch(
               usersApi.util.updateQueryData(
                  'getUsers',
                  undefined,
                  (draft: User[]) => {
                     draft.push(newUser)
                     console.log('push', newUser)
                  },
               ),
            )
            try {
               await queryFulfilled
            } catch {
               console.log('error', newUser)
               patchResult.undo()
            }
         },
         invalidatesTags: ['Users'],
      }),
   }),
})

export const { useGetUsersQuery, useAddUserMutation } = usersApi
