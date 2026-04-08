import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  MapPin,
  ArrowLeft,
  Map as MapIcon,
  List,
  Filter,
  Clock,
  Navigation,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { places } from "../data/mockData";

const categories = [
  "Tous",
  "Monument",
  "Nature",
  "Safari",
  "Plage",
  "Ville",
  "Désert",
];

export function ExploreAround() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Simulate nearby places with random distances
  const nearbyPlaces = places.map((place) => ({
    ...place,
    distance: (Math.random() * 10 + 0.5).toFixed(1),
    duration: Math.floor(Math.random() * 30 + 5),
  }));

  const filteredPlaces =
    selectedCategory === "Tous"
      ? nearbyPlaces
      : nearbyPlaces.filter((place) => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            to="/home"
            className="rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>
          <h1 className="flex-1 text-center font-bold text-white">
            Explorer autour de vous
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-full p-2 transition-colors ${
                viewMode === "list"
                  ? "bg-[#d4a574] text-black"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <List className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`rounded-full p-2 transition-colors ${
                viewMode === "map"
                  ? "bg-[#d4a574] text-black"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <MapIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#d4a574]/20 to-[#f59e0b]/10 p-4 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#d4a574]/20 p-3">
              <MapPin className="h-6 w-6 text-[#d4a574]" />
            </div>
            <div>
              <h3 className="font-bold text-white">Position actuelle</h3>
              <p className="text-sm text-gray-400">
                {filteredPlaces.length} sites à proximité
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-white">
              <Filter className="h-5 w-5 text-[#d4a574]" />
              Catégories
            </h3>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "border-[#d4a574] bg-[#d4a574] text-black"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* View Content */}
        {viewMode === "list" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {filteredPlaces.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Link
                  to={`/place/${place.id}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10"
                >
                  <div className="flex gap-4 p-4">
                    {/* Image */}
                    <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-1 backdrop-blur-sm">
                        <span className="flex items-center gap-1 text-xs font-medium text-white">
                          <Navigation className="h-3 w-3" />
                          {place.distance} km
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="mb-1 font-bold text-white group-hover:text-[#d4a574]">
                          {place.name}
                        </h3>
                        <p className="mb-2 line-clamp-2 text-sm text-gray-400">
                          {place.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs font-medium text-[#d4a574]">
                          {place.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />
                          {place.duration} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-[calc(100vh-320px)] overflow-hidden rounded-2xl border border-white/10"
          >
            {/* Stylized Map View */}
            <div className="relative h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#d4a574 1px, transparent 1px), linear-gradient(90deg, #d4a574 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Center Marker (User Location) */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-[#d4a574]/30 blur-xl" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574] shadow-lg">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                </motion.div>
              </div>

              {/* Place Markers */}
              {filteredPlaces.slice(0, 6).map((place, index) => {
                const angle = (index / 6) * Math.PI * 2;
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={place.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <Link
                      to={`/place/${place.id}`}
                      className="group relative block"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative mb-1 h-10 w-10 overflow-hidden rounded-full border-2 border-[#f59e0b] shadow-lg transition-transform group-hover:scale-125">
                          <img
                            src={place.image}
                            alt={place.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="rounded-full bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {place.distance} km
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Map Info */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl">
                <p className="text-center text-sm text-gray-400">
                  Appuyez sur un marqueur pour voir les détails du site
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
