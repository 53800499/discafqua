import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { activities, countries } from "../data/mockData";

export function Activities() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(activities.map((activity) => activity.category))
  ).sort();

  const filteredActivities = activities.filter((activity) => {
    if (selectedCountry && activity.countryId !== selectedCountry) return false;
    if (selectedCategory && activity.category !== selectedCategory)
      return false;
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
              <Sparkles className="h-6 w-6 text-[#10b981]" />
              Activités & expériences
            </h1>
            <p className="text-sm text-gray-400">
              {filteredActivities.length} activité
              {filteredActivities.length > 1 ? "s" : ""}
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

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.01] hover:border-[#10b981]/50 hover:shadow-xl hover:shadow-[#10b981]/20">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="mb-2 inline-block rounded-full bg-[#10b981]/20 px-3 py-1 text-xs text-[#10b981]">
                      {activity.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {activity.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300">
                          {activity.duration}
                        </p>
                        <p className="text-xs text-gray-400">
                          {activity.country}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-[#d4a574]">
                        ${activity.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="py-20 text-center">
            <Sparkles className="mx-auto mb-4 h-16 w-16 text-gray-600" />
            <h3 className="mb-2 text-xl font-bold text-white">
              Aucune activité trouvée
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
