import type { Migraine } from "../types/migraine"
import { MigraineCard } from "./MigraineCard"

type MigraineListProps = {
  migraines: Migraine[]
  onDeleteMigraine: (index: number) => void
}

export function MigraineList({
  migraines,
  onDeleteMigraine,
}: MigraineListProps) {
  return (
    <section className="flex flex-col items-center gap-4 overflow-auto p-4">
      {migraines.map((migraine, index) => (
        <MigraineCard
          key={`${migraine.date}-${migraine.cycleDay}-${index}`}
          migraine={migraine}
          onDelete={() => onDeleteMigraine(index)}
        />
      ))}
    </section>
  )
}