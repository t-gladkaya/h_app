import { AddMigraineButton } from "./AddMigraineButton"
import type { Migraine } from "../types/migraine"
import { SignOutButton } from "./SignOutButton"

type NavigationProps = {
  onAddMigraine: (data: Migraine) => void
}

export default function Navigation({ onAddMigraine }: NavigationProps) {
  return (
    <header className="sticky top-0 z-10 overflow-hidden bg-white border-b border-slate-200 rounded-md text-slate-800 shadow-md font-medium tracking-normal">
      <ul className="flex w-full items-stretch">
        <li className="flex flex-1 justify-center items-center p-2">
          <p className="rounded-md px-4 py-2 transition-colors">
            Add your migraine
          </p>
          <AddMigraineButton onAdd={onAddMigraine}/>
        </li>
        <li className="flex flex-1 justify-center p-2 bg-slate-50">
          <p className="rounded-md px-4 py-2 transition-colors">
            Statistics
          </p>
          <SignOutButton />
        </li>
      </ul>
    </header>
  )
}
