import './App.css'
import { useState } from 'react'
import Navigation from './components/Navigation'
import { MainPage } from './pages/MainPage'
import { getMigraines, saveMigraines } from './utils/localStorage'

function App() {
  const [migraines, setMigraines] = useState(getMigraines)

  const handleAddMigraine = (data) => {
    setMigraines((currentMigraines) => {
      const updatedMigraines = [...currentMigraines, data];

      saveMigraines(updatedMigraines);
      return updatedMigraines;
    })
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
