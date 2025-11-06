import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md mx-4 rounded-2xl bg-white shadow-xl border border-slate-200"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <div className="px-5 py-4 border-b border-slate-200">
              <div className="text-lg font-semibold text-slate-900">{title}</div>
            </div>
            <div className="p-5 text-slate-700">{children}</div>
            <div className="px-5 py-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black/90"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
