import './App.css'
import Character from './pages/Character/Character'
import CharactersList from './pages/CharactersList/CharactersList'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={CharactersList}/>
        <Route path='/:id' Component={Character}/>
      </Routes>
    </div>
  )
}

export default App
