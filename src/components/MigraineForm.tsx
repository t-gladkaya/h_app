import { FormEvent, useState } from "react"
import type { MigraineSubmitProps } from "./Modal"

export const MigraineForm = ({ onClose, onSubmit }: MigraineSubmitProps) => {
  const [date, setDate] = useState("")
  const [cycleDay, setCycleDay] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({ date, cycleDay: Number(cycleDay) })
  }

  return(
    <form className="relative" onSubmit={handleSubmit}>
      <button className="absolute top-0 right-0" type="button" onClick={onClose}>
        <img className="w-6 h-6 hover:transform hover:scale-110 duration-300 hover:cursor-pointer" src="/close vector.svg" alt="close" />
      </button>
      <h3 className="pr-8 text-xl font-bold mb-4">Add Migraine Data</h3>

      <div className="mb-4">
        <label htmlFor="date" className="flex items-center gap-4 mb-2">
          Migraine Date:
          <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} className="flex-1 border rounded py-1 px-2" required />
        </label>
      </div>

      <div>
        <label htmlFor="cycleDay" className="flex items-center gap-4 mb-2">
          Add Cycle Day:
          <input type="number" id="cycleDay" value={cycleDay} onChange={(event) => setCycleDay(event.target.value)} className="flex-1 border rounded py-1 px-2" required />
        </label>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" type="submit">
        Submit
      </button>
    </form>
  )
}