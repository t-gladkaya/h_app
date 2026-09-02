import { AddMigraineButton } from "./AddMigraineButton"
import type { MigraineDataProps } from "../types/types"

type NavigationProps = {
  onAddMigraine: (data: MigraineDataProps) => void
}

export default function Navigation({ onAddMigraine }: NavigationProps) {
  return (
    <header className="sticky top-0 z-10 overflow-hidden rounded-md text-slate-700 shadow-md [font-family:Inter,ui-sans-serif,system-ui,sans-serif] font-medium tracking-normal bg-white">
      <ul className="flex w-full items-stretch">
        <li className="flex flex-1 justify-center items-center                                                                                                                                                                                                                                                                                                                                                                               p-2">
          <p className="rounded-md px-4 py-2 transition-colors">
            Add your migraine
          </p>
          <AddMigraineButton onAdd={onAddMigraine}/>
        </li>
        <li className="flex flex-1 justify-center p-2">
          <p className="rounded-md px-4 py-2 transition-colors">
            Statistics
          </p>
        </li>
      </ul>
    </header>
  )
}
