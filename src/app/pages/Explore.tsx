import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Search, MapPin } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { countries } from "../data/mockData";

export function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Tous");

  const continents = [
    "Tous",
    "Afrique du Nord",
    "Afrique de l'Ouest",
    "Afrique de l'Est",
    "Afrique Australe",
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesContinent =
      selectedContinent === "Tous" || country.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="px-6 py-4">
          <h1 className="mb-4 text-2xl font-bold text-white">
            Explorer l'Afrique
          </h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un pays..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-[#d4a574] focus:ring-2 focus:ring-[#d4a574]/20"
            />
          </div>
        </div>

        {/* Continent Filter */}
        <div className="overflow-x-auto px-6 pb-4">
          <div className="flex gap-2">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all ${
                  selectedContinent === continent
                    ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                    : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {continent}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="px-6 py-6">
        {filteredCountries.length === 0 ? (
          <div className="py-12 text-center text-gray-400">
            Aucun pays trouvé
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCountries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/country/${country.id}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#d4a574]" />
                        <span className="text-sm text-[#d4a574]">
                          {country.continent}
                        </span>
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {country.name}
                      </h3>
                      <p className="mb-3 text-sm text-gray-300">
                        {country.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{country.places} lieux à découvrir</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
