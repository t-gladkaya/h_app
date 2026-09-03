import type { Migraine } from "../types/migraine"
import { formatDate } from "../utils/dateTransformer"

type MigraineCardProps = {
  migraine: Migraine
  onDelete: () => void
}

export function MigraineCard({ migraine, onDelete }: MigraineCardProps) {
  return (
    <article className="relative flex gap-5 w-full rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:border-violet-300 hover:shadow-md">
      <div>
        <p className="text-sm text-slate-500">
          Date: {formatDate(migraine.date)}
        </p>
        <p className="text-lg font-medium text-slate-800">
          Cycle Day: {migraine.cycleDay}
        </p>
      </div>

      <button
        type="button"
        className="absolute right-0 top-0 rounded-r-xl p-4 flex items-center justify-center bg-purple-100 hover:bg-purple-200 h-full hover:cursor-pointer"
        onClick={onDelete}
      >
        <img className="w-4 h-4" src="/icon-trash-can.png" alt="delete migraine" />
      </button>
    </article>
  )
}