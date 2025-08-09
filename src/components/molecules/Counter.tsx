import { useDispatch, useSelector } from 'react-redux'
import type { FC } from 'react'
import type { Dispatch } from '@reduxjs/toolkit'

import type { RootState } from '@store/store.ts'
import {
   decrement,
   increment,
   incrementByAmount,
} from '@store/slices/counterSlice.ts'
import { Btn } from '@components/atoms/general/Btn'

export const Counter: FC = () => {
   const dispatch: Dispatch = useDispatch()
   const count: number = useSelector(
      (state: RootState): number => state.counter.value,
   )

   return (
      <div>
         <h2>Counter: {count}</h2>
         <Btn onClick={() => dispatch(increment())}>+1</Btn>
         <Btn onClick={() => dispatch(decrement())}>-1</Btn>
         <Btn onClick={() => dispatch(incrementByAmount(5))}>+5</Btn>
      </div>
   )
}
