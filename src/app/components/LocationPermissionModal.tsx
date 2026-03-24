import { motion, AnimatePresence } from "motion/react";
import { MapPin, X } from "lucide-react";

interface LocationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnable: () => void;
}

export function LocationPermissionModal({
  isOpen,
  onClose,
  onEnable,
}: LocationPermissionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-[#d4a574] to-[#f59e0b] p-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-center text-2xl font-bold text-white">
                Activer la localisation
              </h3>
              <p className="mb-8 text-center leading-relaxed text-gray-400">
                Activez votre localisation pour découvrir des lieux et
                activités personnalisés autour de vous en Afrique.
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={onEnable}
                  className="w-full rounded-xl bg-gradient-to-r from-[#d4a574] to-[#f59e0b] py-3.5 font-medium text-black shadow-lg shadow-[#d4a574]/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#d4a574]/40"
                >
                  Activer la localisation
                </button>
                <button
                  onClick={onClose}
                  className="w-full rounded-xl border border-white/10 py-3.5 font-medium text-white transition-all hover:bg-white/5"
                >
                  Plus tard
                </button>
              </div>

              {/* Privacy Note */}
              <p className="mt-6 text-center text-xs text-gray-500">
                Nous respectons votre vie privée. Vous pouvez modifier ce
                paramètre à tout moment.
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
