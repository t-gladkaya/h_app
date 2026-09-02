import './App.css'
import { useState } from 'react'
import Navigation from './components/Navigation'
import { MainPage } from './pages/MainPage'

function App() {
  const [migraines, setMigraines] = useState([])

  const handleAddMigraine = (data) => {
    setMigraines((currentMigraines) => [...currentMigraines, data])
  }

  return (
    <>
      <div className="flex min-h-svh flex-col">
        <Navigation onAddMigraine={handleAddMigraine} />
        <MainPage migraines={migraines} />
      </div>
    </>
  )
}

export default App
