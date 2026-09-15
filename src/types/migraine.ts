export type Migraine = {
 id: string
 date: string
 cycleDay: number
}

export type MigraineRow = {
  id: string
  user_id: string
  date: string
  cycle_day: number
  created_at: string
}

export type MigraineInput = {
  date: string
  cycleDay: number
}