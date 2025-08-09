import type { FC } from 'react'

import { Users } from './components/molecules/Users'
import { Counter } from './components/molecules/Counter'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
   return (
      <>
         <div>
            <a href="https://vite.dev" rel="noreferrer" target="_blank">
               <img alt="Vite logo" className="logo" src={viteLogo} />
            </a>
            <a href="https://react.dev" rel="noreferrer" target="_blank">
               <img alt="React logo" className="logo react" src={reactLogo} />
            </a>
         </div>

         <h1>Redux Toolkit</h1>
         <Counter />
         <Users />
      </>
   )
}

export default App
