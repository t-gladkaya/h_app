import { useState } from "react"
import type { Migraine, MigraineInput } from "../types/migraine"
import { MigraineCard } from "./MigraineCard"
import { AnimatePresence } from "framer-motion"
import { DeleteConfirmModal } from "./DeleteConfirmModal"
import { Modal } from "./Modal"

type MigraineListProps = {
  migraines: Migraine[]
  onDeleteMigraine: (id: string) => void
  onEditMigraine: (id: string, updatedData: MigraineInput) => void
}

type SortOrder = "asc" | "desc"

export function MigraineList({
  migraines,
  onDeleteMigraine,
  onEditMigraine,
}: MigraineListProps) {
  const [idToDelete, setIdToDelete] = useState<string | null>(null)
  const [idToEdit, setIdToEdit] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")

  const migraineToEdit =
    idToEdit === null
    ? null
    : migraines.find((migraine) => migraine.id === idToEdit) ?? null;

  const sortedMigraines = [...migraines].sort((a, b) => {
    const firstDate = new Date(a.date).getTime()
    const secondDate = new Date(b.date).getTime()

    return sortOrder === "asc"
      ? firstDate - secondDate
      : secondDate - firstDate
  })

  const handleCancelDelete = () => {
    setIdToDelete(null)
  }

  const handleConfirmDelete = () => {
    if (idToDelete === null) return

    onDeleteMigraine(idToDelete)
    setIdToDelete(null)
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
        {sortedMigraines.map((migraine) => (
          <MigraineCard
            key={migraine.id}
            migraine={migraine}
            onDelete={() => setIdToDelete(migraine.id)}
            onEdit={() => setIdToEdit(migraine.id)}
          />
        ))}
      </section>

      <AnimatePresence>
        {idToDelete !== null && (
          <DeleteConfirmModal
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {migraineToEdit && idToEdit !==null && (
          <Modal
            initialData={migraineToEdit}
            onClose={() => setIdToEdit(null)}
            onSubmit={(updatedData) => {
              onEditMigraine(idToEdit, updatedData)
              setIdToEdit(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>

  )
}
