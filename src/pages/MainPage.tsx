import type { MigraineDataProps } from "../types/types"

type MainPageProps = {
  migraines: MigraineDataProps[]
}

export const MainPage = ({ migraines }: MainPageProps) => {
  return(
    <div className="grid min-h-0 w-full flex-1 grid-cols-2">
      <section className="flex flex-col items-start gap-4 overflow-auto p-4">
        {migraines.map((migraine, index) => (
          <article key={`${migraine.date}-${migraine.cycleDay}-${index}`} className="w-full max-w-md rounded-md border p-4">
            <p>Date: {migraine.date}</p>
            <p>Cycle Day: {migraine.cycleDay}</p>
          </article>
        ))}
      </section>
      <section className="flex justify-center items-center bg-blue-100 p-4">
        Here you will see the statistics of your migraines.
      </section>
    </div>
  )
}