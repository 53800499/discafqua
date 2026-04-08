import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Navigation as NavigationIcon,
  MapPin,
  Clock,
  Phone,
  Share2,
  CheckCircle,
} from "lucide-react";
import { places } from "../data/mockData";

export function PlaceNavigation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [hasArrived, setHasArrived] = useState(false);

  const place = places.find((p) => p.id === id);

  const initialDistance = 5.2;
  const initialDuration = 18;

  const currentDistance = (initialDistance * (100 - progress)) / 100;
  const currentDuration = Math.ceil((initialDuration * (100 - progress)) / 100);

  useEffect(() => {
    // Simulate navigation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setHasArrived(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!place) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Map Container */}
      <div className="relative h-screen w-full">
        {/* Stylized Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000]">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#d4a574 1px, transparent 1px), linear-gradient(90deg, #d4a574 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Animated Route Line */}
          <svg className="absolute inset-0 h-full w-full">
            <motion.path
              d="M 100 700 Q 200 400, 400 300 T 700 100"
              stroke="#f59e0b"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.5 }}
            />
          </svg>

          {/* Starting Point (User) */}
          <motion.div
            className="absolute"
            style={{ left: "10%", bottom: "10%" }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#d4a574]/30 blur-xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#d4a574] shadow-xl">
                <NavigationIcon className="h-7 w-7 text-black" />
              </div>
            </div>
            <div className="mt-2 rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              Vous
            </div>
          </motion.div>

          {/* Destination Point */}
          <motion.div
            className="absolute"
            style={{ right: "15%", top: "10%" }}
            animate={{
              scale: hasArrived ? [1, 1.2, 1] : 1,
              y: hasArrived ? [0, -10, 0] : 0,
            }}
            transition={{
              duration: 1,
              repeat: hasArrived ? Infinity : 0,
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#f59e0b]/30 blur-xl" />
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-[#f59e0b] shadow-xl">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {hasArrived && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 rounded-full bg-green-500 p-1"
                >
                  <CheckCircle className="h-5 w-5 text-white" />
                </motion.div>
              )}
            </div>
            <div className="mt-2 max-w-[120px] rounded-full bg-black/80 px-3 py-1 text-center text-sm font-medium text-white backdrop-blur-sm">
              {place.name}
            </div>
          </motion.div>

          {/* Intermediate Waypoints */}
          {[30, 60].map((percent, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${25 + index * 25}%`,
                top: `${50 - index * 15}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: progress > percent ? 1 : 0.3,
                scale: progress > percent ? 1 : 0.8,
              }}
            >
              <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            <h1 className="flex-1 text-center font-bold text-white">
              Navigation
            </h1>
            <button className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Share2 className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Navigation Info Card */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="mx-4 mb-4 overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl"
          >
            {hasArrived ? (
              // Arrival Card
              <div className="p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mb-4 flex justify-center"
                >
                  <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
                <h2 className="mb-2 text-center text-2xl font-bold text-white">
                  Vous êtes arrivé !
                </h2>
                <p className="mb-6 text-center text-gray-400">
                  Bienvenue à {place.name}
                </p>
                <button
                  onClick={() => navigate(`/story/${place.id}`)}
                  className="w-full rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b] px-6 py-4 font-bold text-black transition-all hover:scale-105"
                >
                  Découvrir l'histoire
                </button>
              </div>
            ) : (
              // Navigation Card
              <>
                {/* Progress Bar */}
                <div className="relative h-2 bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>

                <div className="p-6">
                  {/* Distance & Time */}
                  <div className="mb-6 flex items-center justify-around">
                    <div className="text-center">
                      <div className="mb-1 text-3xl font-bold text-white">
                        {currentDistance.toFixed(1)}
                      </div>
                      <div className="text-sm text-gray-400">kilomètres</div>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="mb-1 text-3xl font-bold text-white">
                        {currentDuration}
                      </div>
                      <div className="text-sm text-gray-400">minutes</div>
                    </div>
                  </div>

                  {/* Destination Info */}
                  <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#d4a574]" />
                      <h3 className="font-bold text-white">{place.name}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{place.country}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-white transition-colors hover:bg-white/10">
                      <Phone className="h-5 w-5" />
                      Appeler
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-white transition-colors hover:bg-white/10">
                      <Clock className="h-5 w-5" />
                      Horaires
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
