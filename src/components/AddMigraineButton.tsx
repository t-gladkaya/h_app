import { useState } from "react"
import { Modal } from "./Modal"
import { AnimatePresence } from "framer-motion"
import type { Migraine } from "../types/migraine"

type AddMigraineButtonProps = {
  onAdd: (data: Migraine) => void;
}

export function AddMigraineButton({ onAdd }: AddMigraineButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className="flex h-8 w-8 items-center justify-center hover:transform hover:scale-110 duration-300 rounded-full transition hover:cursor-pointer" onClick={handleOpenModal}>
        <img className="w-6 h-6" src="/plus.svg" alt="add migraine" />
      </button>

      <AnimatePresence>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            onAdd(data)
            setIsModalOpen(false)
          }}
        />
      )}
      </AnimatePresence>
    </>
  )
}