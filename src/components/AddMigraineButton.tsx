import { useState } from "react"
import { Modal } from "./Modal"
import { AnimatePresence } from "framer-motion"
import type { MigraineDataProps } from "../types/types"

type AddMigraineButtonProps = {
  onAdd: (data: MigraineDataProps) => void;
}

export function AddMigraineButton({ onAdd }: AddMigraineButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className="flex items-center justify-center w-6 h-6 bg-white rounded-2xl hover:bg-purple-200 transition-colors hover:cursor-pointer" onClick={handleOpenModal}>
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