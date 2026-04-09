import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { StarryBackground } from "../components/StarryBackground";
import logo from "../../assets/logo.png";

const slides = [
  {
    title: "Découvrir l'Afrique autrement",
    description: "Une expérience immersive pour explorer les cultures, histoires et merveilles du continent africain",
    image: "https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Explorer les cultures et histoires",
    description: "Du royaume du Dahomey au Bénin aux plaines du Serengeti en Tanzanie, découvrez les récits qui ont façonné l'Afrique",
    image: "https://images.unsplash.com/photo-1768212566108-4ce4f329e4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Voyager intelligemment",
    description: "Suggestions personnalisées basées sur votre localisation et vos préférences pour une expérience unique",
    image: "https://images.unsplash.com/photo-1771495604385-0945b2330541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2l0eSUyMHVyYmFuJTIwbW9kZXJufGVufDF8fHx8MTc3NDM1Mjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Expérience locale en temps réel",
    description: "Activez la géolocalisation pour découvrir les lieux et activités autour de vous en Afrique",
    image: "https://images.unsplash.com/photo-1731329571540-a1d6dfc902b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjB6YW56aWJhciUyMHBhcmFkaXNlfGVufDF8fHx8MTc3NDM1Mjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
          </div>

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-between px-6 py-12">
            {/* Logo */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <img src={logo} alt="Logo" className="h-20 w-20 object-contain" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-center"
            >
              <h1 className="mb-4 bg-gradient-to-r from-[#d4a574] via-[#f59e0b] to-[#ea580c] bg-clip-text text-4xl font-bold leading-tight text-transparent">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                {slides[currentSlide].description}
              </p>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-md space-y-6"
            >
              {/* Progress Indicators */}
              <div className="flex justify-center gap-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-[#d4a574] to-[#f59e0b]"
                        : "w-1.5 bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 text-gray-400 transition-colors hover:text-white"
                >
                  Passer
                </button>
                <button
                  onClick={handleNext}
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b] px-8 py-3 font-medium text-black shadow-lg shadow-[#d4a574]/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4a574]/40"
                >
                  {currentSlide === slides.length - 1 ? "Commencer" : "Suivant"}
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}