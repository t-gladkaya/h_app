import './App.css'
import Navigation from './components/Navigation'
import { MainPage } from './pages/MainPage'
import { useMigraines } from './hooks/useMigraines'

function App() {
  const {migraines, addMigraine, deleteMigraine} = useMigraines()

  return (
    <>
      <div className="flex min-h-svh flex-col">
        <Navigation onAddMigraine={addMigraine} />
        <MainPage migraines={migraines} onDeleteMigraine={deleteMigraine} />
      </div>
    </>
  )
}

export default App
