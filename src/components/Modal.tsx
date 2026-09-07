import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { MigraineForm } from "./MigraineForm"
import type { Migraine } from "../types/migraine"

export type MigraineSubmitProps = {
  onClose: () => void;
  onSubmit: (data: Migraine) => void;
  initialData?: Migraine;
}

export const Modal = ({ onClose, onSubmit, initialData }: MigraineSubmitProps) => {
  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-6 rounded-md shadow-lg"
        initial={{ opacity: 0, scale: 0.95, y: -120 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -120 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <MigraineForm onClose={onClose} onSubmit={onSubmit} initialData={initialData} />
      </motion.div>
    </motion.div>,
    document.body
  )
}
