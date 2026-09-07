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

export function MigraineList({
  migraines,
  onDeleteMigraine,
  onEditMigraine,
}: MigraineListProps) {
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null)
  const [indexToEdit, setIndexToEdit] = useState<number | null>(null)

  const migraineToEdit = indexToEdit === null ? null : migraines[indexToEdit]

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
    <>
      <section className="flex flex-col items-center gap-4 overflow-auto p-4">
        {migraines.map((migraine, index) => (
          <MigraineCard
            key={`${migraine.date}-${migraine.cycleDay}-${index}`}
            migraine={migraine}
            onDelete={() => handleRequestDelete(index)}
            onEdit={() => setIndexToEdit(index)}
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
    </>

  )
}