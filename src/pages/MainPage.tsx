import type { Migraine } from "../types/migraine"
import { MigraineList } from "../components/MigraineList"
import { StatisticsPanel } from "../components/StatisticsPanel"

export type MainPageProps = {
  migraines: Migraine[]
  onDeleteMigraine: (index: number) => void
  onEditMigraine: (index: number, updatedData: Migraine) => void
}

export const MainPage = ({ migraines, onDeleteMigraine, onEditMigraine }: MainPageProps) => {
  return(
    <div className="grid min-h-0 w-full flex-1 grid-cols-2 bg-slate-50">
      <MigraineList migraines={migraines} onDeleteMigraine={onDeleteMigraine} onEditMigraine={onEditMigraine} />
      <StatisticsPanel />
    </div>
  )
}