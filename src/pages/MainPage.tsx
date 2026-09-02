import type { MigraineDataProps } from "../types/types"
import { formatDate } from "../utils/dateTransformer"

type MainPageProps = {
  migraines: MigraineDataProps[]
}

export const MainPage = ({ migraines }: MainPageProps) => {
  return(
    <div className="grid min-h-0 w-full flex-1 grid-cols-2 bg-slate-50">
      <section className="flex flex-col items-center gap-4 overflow-auto p-4">
        {migraines.map((migraine, index) => (
          <article
            key={`${migraine.date}-${migraine.cycleDay}-${index}`}
            className="w-full rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:border-violet-300 hover:shadow-md"
          >
            <p className="text-sm text-slate-500">
              Date: {formatDate(migraine.date)}
            </p>
            <p className="text-lg font-medium text-slate-800">
              Cycle Day: {migraine.cycleDay}
            </p>
          </article>
        ))}
      </section>
      <section className="fixed right-0 w-3/6 h-full flex justify-center bg-gray-100 items-center p-4 text-slate-700">
        Here you will see the statistics of your migraines.
      </section>
    </div>
  )
}