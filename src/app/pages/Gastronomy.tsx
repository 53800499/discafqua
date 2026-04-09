import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { dishes, countries } from "../data/mockData";

export function Gastronomy() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(dishes.map((dish) => dish.category))
  ).sort((a, b) => a.localeCompare(b));

  const filteredDishes = dishes.filter((dish) => {
    if (selectedCountry && dish.countryId !== selectedCountry) return false;
    if (selectedCategory && dish.category !== selectedCategory) return false;
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
              <UtensilsCrossed className="h-6 w-6 text-[#f59e0b]" />
              Gastronomie africaine
            </h1>
            <p className="text-sm text-gray-400">
              {filteredDishes.length} plat{filteredDishes.length > 1 ? "s" : ""}
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

          {/* Category Filter */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-400">Catégorie</h3>
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                    : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                Toutes
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black"
                      : "border border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#f59e0b]/50 hover:shadow-xl hover:shadow-[#f59e0b]/20">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="mb-1 text-sm font-bold text-white">
                      {dish.name}
                    </h3>
                    <p className="mb-2 text-xs text-gray-300">{dish.country}</p>
                    <span className="inline-block rounded-full bg-[#f59e0b]/20 px-2 py-1 text-xs text-[#f59e0b]">
                      {dish.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDishes.length === 0 && (
          <div className="py-20 text-center">
            <UtensilsCrossed className="mx-auto mb-4 h-16 w-16 text-gray-600" />
            <h3 className="mb-2 text-xl font-bold text-white">
              Aucun plat trouvé
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
