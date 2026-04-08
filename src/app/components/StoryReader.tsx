import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Volume2 } from "lucide-react";
import type { Story } from "../data/mockData";

interface StoryReaderProps {
  story: Story;
  onClose: () => void;
}

export function StoryReader({ story, onClose }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = story.pages || [];
  const totalPages = pages.length;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setDirection(1);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setDirection(-1);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const currentPageData = pages[currentPage];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <h2 className="flex-1 text-center font-bold text-white">
            {story.title}
          </h2>
          <button className="rounded-full p-2 transition-colors hover:bg-white/10">
            <Volume2 className="h-6 w-6 text-[#d4a574]" />
          </button>
        </div>
      </div>

      {/* Book Container */}
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-2xl">
          {/* Page Image (if available) */}
          {currentPageData?.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 overflow-hidden rounded-2xl"
            >
              <img
                src={currentPageData.image}
                alt={story.title}
                className="h-48 w-full object-cover"
              />
            </motion.div>
          )}

          {/* Book Page with Turn Effect */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc8] p-8 shadow-2xl">
            {/* Decorative Book Texture */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_3px)]" />
            </div>

            {/* Page Content */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{
                  rotateY: direction > 0 ? 90 : -90,
                  opacity: 0,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateY: direction > 0 ? -90 : 90,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="relative z-10"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="space-y-6">
                  {/* Page Number */}
                  <div className="flex items-center justify-between border-b-2 border-[#d4a574]/30 pb-3">
                    <span className="font-serif text-sm text-[#6b5d4f]">
                      Page {currentPageData?.pageNumber}
                    </span>
                    <span className="font-serif text-sm text-[#6b5d4f]">
                      {story.country}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-h-[280px]">
                    <p
                      className="whitespace-pre-line font-serif leading-relaxed text-[#2d2419]"
                      style={{
                        fontSize: "1.0625rem",
                        lineHeight: "1.8",
                      }}
                    >
                      {currentPageData?.content}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="flex justify-center">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Book Spine Shadow Effect */}
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/5 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/5 to-transparent" />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 0 || isFlipping}
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
              Précédent
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-2">
                {pages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentPage
                        ? "w-8 bg-[#d4a574]"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <span className="mt-2 text-sm text-gray-400">
                {currentPage + 1} / {totalPages}
              </span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-30"
            >
              Suivant
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Swipe Hint */}
          {currentPage === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 text-center text-sm text-gray-400"
            >
              Swipez ou utilisez les boutons pour tourner les pages
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
