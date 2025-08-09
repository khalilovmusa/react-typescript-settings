import type { ChangeEvent, FC, JSX } from 'react'
import { useState } from 'react'

import type { User } from '@models/userTypes'
import { useAddUserMutation, useGetUsersQuery } from '@store/api/users'

export const Users: FC = (): JSX.Element => {
   const { data: users, isLoading } = useGetUsersQuery()
   const [addUser] = useAddUserMutation()
   const [name, setName] = useState('')

   const handleAddUser = async (): Promise<void> => {
      if (!name) return
      await addUser({ id: Date.now(), name }).unwrap()
      setName('')
   }

   if (isLoading) return <p>Loading...</p>

   return (
      <div>
         <ul>
            {users?.map((user: User) => <li key={user.id}>{user.name}</li>)}
         </ul>

         <input
            placeholder="Имя..."
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
               setName(e.target.value)
            }
         />
         <button onClick={handleAddUser}>Добавить</button>
      </div>
   )
}
