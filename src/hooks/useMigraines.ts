import { supabase } from "../lib/supabase"
import { useEffect, useState } from "react"
import type { Migraine, MigraineInput, MigraineRow } from "../types/migraine";

const mapMigraineRow = (row: MigraineRow): Migraine => {
  return {
    id: row.id,
    date: row.date,
    cycleDay: row.cycle_day,
  }
}

export function useMigraines() {
  const [migraines, setMigraines] = useState<Migraine[]>([]);

  useEffect(() => {
    const loadMigraines = async () => {
      const { data, error } = await supabase
        .from("migraines")
        .select("*")
        .order("date", { ascending: false })

      if (error) {
        console.error(error.message)
        return
      }

      setMigraines((data ?? []).map(mapMigraineRow))
    }

    loadMigraines()
  }, [])

  const addMigraine = async (data: MigraineInput) => {
    const { data: userData, error: userError} = await supabase.auth.getUser()

    if (userError || !userData.user) {
      console.error(userError?.message ?? "User is not logged in")
      return
    }

    const { data: newMigraine, error } = await supabase
      .from("migraines")
      .insert({
        user_id: userData.user.id,
        date: data.date,
        cycle_day: data.cycleDay,
      })
      .select()
      .single()

    if (error) {
      console.error(error.message)
      return
    }

    setMigraines((currentMigraines) => [
      mapMigraineRow(newMigraine),
      ...currentMigraines,

    ])
  }

  const deleteMigraine = async (id: string) => {
    const { error } = await supabase
      .from("migraines")
      .delete()
      .eq("id", id)

    if (error) {
      console.error(error.message)
      return
    }

    setMigraines((currentMigraines) =>
      currentMigraines.filter((migraine) => migraine.id !== id)
    )
  }

  const editMigraine = async (id: string, updatedData: MigraineInput) => {
    const { data, error } = await supabase
      .from("migraines")
      .update({
        date: updatedData.date,
        cycle_day: updatedData.cycleDay,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error(error.message)
      return
    }

    setMigraines((currentMigraines) =>
      currentMigraines.map((migraine) =>
        migraine.id === id ? mapMigraineRow(data) : migraine
      )
    )
  }

  return {
    migraines,
    addMigraine,
    deleteMigraine,
    editMigraine,
  }
}