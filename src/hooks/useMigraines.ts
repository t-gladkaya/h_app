import { saveMigraines, getMigraines } from "../utils/migraineStorage"
import { useState } from "react"
import type { Migraine } from "../types/migraine";

export function useMigraines() {
  const [migraines, setMigraines] = useState<Migraine[]>(getMigraines);

  const addMigraine = (data: Migraine) => {
    setMigraines((currentMigraines) => {
      const updatedMigraines = [...currentMigraines, data];

      saveMigraines(updatedMigraines);
      return updatedMigraines;
    })
  }

  const deleteMigraine = (indexToDelete: number) => {
    setMigraines((currentMigraines) => {
      const updatedMigraines = currentMigraines.filter(
        (_, index) => index !== indexToDelete
      );

      saveMigraines(updatedMigraines);
      return updatedMigraines;
    })
  }

  const editMigraine = (indexToEdit: number, updatedData: Migraine) => {
    setMigraines((currentMigraines) => {
      const updatedMigraines = currentMigraines.map((migraine, index) =>
        index === indexToEdit ? updatedData : migraine
      )

      saveMigraines(updatedMigraines)
      return updatedMigraines
    })
  }

  return {
    migraines,
    addMigraine,
    deleteMigraine,
    editMigraine,
  }
}
