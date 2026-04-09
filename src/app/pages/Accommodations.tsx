import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Hotel } from "lucide-react";
import { Link } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { accommodations, countries } from "../data/mockData";

export function Accommodations() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const types = Array.from(
    new Set(accommodations.map((acc) => acc.type))
  ).sort((a, b) => a.localeCompare(b));

  const filteredAccommodations = accommodations.filter((acc) => {
    if (selectedCountry && acc.countryId !== selectedCountry) return false;
    if (selectedType && acc.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link
            to="/home"
            className="rounded-full p-2 hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="flex items-center gap-2 text-xl font-bold text-white">
              <Hotel className="h-6 w-6 text-[#d4a574]" />
              Hébergements
            </h1>
            <p className="text-sm text-gray-400">
              {filteredAccommodations.length} hébergement
              {filteredAccommodations.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Country Filter */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-400">Pays</h3>
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCountry(null)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCountry === null
                    ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                    : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                Tous
              </button>
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country.id)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCountry === country.id
                      ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                      : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {country.name}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-400">Type</h3>
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedType === null
                    ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                    : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                Tous
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedType === type
                      ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                      : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="space-y-4">
          {filteredAccommodations.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.01] hover:border-[#d4a574]/50 hover:shadow-xl hover:shadow-[#d4a574]/20">
                <div className="flex gap-4">
                  <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 py-4 pr-4">
                    <span className="mb-2 inline-block rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs text-[#d4a574]">
                      {hotel.type}
                    </span>
                    <h3 className="mb-1 font-bold text-white">{hotel.name}</h3>
                    <p className="mb-3 text-sm text-gray-400">
                      {hotel.location}, {hotel.country}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-[#f59e0b]">★</span>
                        <span className="text-sm font-medium text-white">
                          {hotel.rating}
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-bold text-[#d4a574]">
                          ${hotel.pricePerNight}
                        </span>
                        <span className="text-sm text-gray-400">/nuit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAccommodations.length === 0 && (
          <div className="py-20 text-center">
            <Hotel className="mx-auto mb-4 h-16 w-16 text-gray-600" />
            <h3 className="mb-2 text-xl font-bold text-white">
              Aucun hébergement trouvé
            </h3>
            <p className="text-gray-400">
              Essayez de modifier vos filtres
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
