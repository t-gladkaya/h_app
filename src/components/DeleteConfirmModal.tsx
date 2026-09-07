import { createPortal } from "react-dom"
import { motion } from "framer-motion"

type DeleteConfirmModalProps = {
  onCancel: () => void
  onConfirm: () => void
}

export const DeleteConfirmModal = ({ onCancel, onConfirm }: DeleteConfirmModalProps) => {
  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{ opacity: 0}}
      onClick={onCancel}
    >
      <motion.div
        className="rounded-md bg-white p-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.95, y: -80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -80 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={(event) => event.stopPropagation()}
      >
        <p className="mb-4 text-lg font-medium text-slate-800">
          Delete this migraine note?
        </p>

        <div className="flex justify-center gap-5 p-4">
          <button
            type="button"
            className="rounded-md border border-slate-300 px-4 py-2 hover:cursor-pointer hover:bg-slate-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-red-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-red-600"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}