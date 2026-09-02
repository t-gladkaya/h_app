import type { MigraineDataProps } from "../types/types"
import { formatDate } from "../utils/dateTransformer"

type MainPageProps = {
  migraines: MigraineDataProps[]
}

export const MainPage = ({ migraines }: MainPageProps) => {
  return(
    <div className="grid min-h-0 w-full flex-1 grid-cols-2">
      <section className="flex flex-col items-center gap-4 overflow-auto p-4">
        {migraines.map((migraine, index) => (
          <article key={`${migraine.date}-${migraine.cycleDay}-${index}`} className="w-full max-w-md rounded-md shadow-blue-300 shadow-md p-4 bg-blue-200">
            <p>Date: {formatDate(migraine.date)}</p>
            <p>Cycle Day: {migraine.cycleDay}</p>
          </article>
        ))}
      </section>
      <section className="fixed right-0 w-3/6 h-full flex justify-center items-center bg-blue-100 p-4">
        Here you will see the statistics of your migraines.
      </section>
    </div>
  )
}