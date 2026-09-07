import { useState } from "react"
import type { Migraine } from "../types/migraine"
import { MigraineCard } from "./MigraineCard"
import { AnimatePresence } from "framer-motion"
import { DeleteConfirmModal } from "./DeleteConfirmModal"
import { Modal } from "./Modal"

type MigraineListProps = {
  migraines: Migraine[]
  onDeleteMigraine: (index: number) => void
  onEditMigraine: (index: number, updatedData: Migraine) => void
}

type SortOrder = "asc" | "desc"

export function MigraineList({
  migraines,
  onDeleteMigraine,
  onEditMigraine,
}: MigraineListProps) {
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null)
  const [indexToEdit, setIndexToEdit] = useState<number | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")

  const migraineToEdit = indexToEdit === null ? null : migraines[indexToEdit]

  const sortedMigraines = migraines
    .map((migraine, index) => ({ migraine, originalIndex: index }))
    .sort((a, b) => {
      const firstDate = new Date(a.migraine.date).getTime()
      const secondDate = new Date(b.migraine.date).getTime()

      return sortOrder === "asc"
        ? firstDate - secondDate
        : secondDate - firstDate
    })

  const handleRequestDelete = (index: number) => {
    setIndexToDelete(index)
  }

  const handleCancelDelete = () => {
    setIndexToDelete(null)
  }

  const handleConfirmDelete = () => {
    if (indexToDelete === null) return

    onDeleteMigraine(indexToDelete)
    setIndexToDelete(null)
  }

  return (
    <div className="flex h-full flex-col border-r border-slate-200 bg-slate-50">
      <section className="flex justify-end">
        <div className="flex gap-4 border-r border-slate-200 bg-slate-50 p-4">
          <button
            type="button"
            onClick={() => setSortOrder("desc")}
            className={sortOrder === "desc" ? "opacity-100" : "opacity-50"}
          >
            <img src="/sort-descending.png" alt="sort descending" className="w-6 h-6 hover:opacity-75 hover:cursor-pointer" />
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("asc")}
            className={sortOrder === "asc" ? "opacity-100" : "opacity-50"}
          >
            <img src="/sort-ascending.png" alt="sort ascending" className="w-6 h-6 hover:opacity-75 hover:cursor-pointer" />
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 overflow-auto p-4">
        {sortedMigraines.map(({ migraine, originalIndex }) => (
          <MigraineCard
            key={`${migraine.date}-${migraine.cycleDay}-${originalIndex}`}
            migraine={migraine}
            onDelete={() => handleRequestDelete(originalIndex)}
            onEdit={() => setIndexToEdit(originalIndex)}
          />
        ))}
      </section>

      <AnimatePresence>
        {indexToDelete !== null && (
          <DeleteConfirmModal
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {migraineToEdit && indexToEdit !==null && (
          <Modal
            initialData={migraineToEdit}
            onClose={() => setIndexToEdit(null)}
            onSubmit={(updatedData) => {
              onEditMigraine(indexToEdit, updatedData)
              setIndexToEdit(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>

  )
}
