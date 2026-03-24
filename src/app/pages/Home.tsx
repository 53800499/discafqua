import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Heart, Sparkles, TrendingUp } from "lucide-react";
import { LocationPermissionModal } from "../components/LocationPermissionModal";
import { BottomNav } from "../components/BottomNav";
import { countries, places } from "../data/mockData";
import logo from "figma:asset/fff456d1796a5b1b94f8aeee4e4fbb7a0f5c291d.png";

export function Home() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [isInAfrica, setIsInAfrica] = useState(false);

  useEffect(() => {
    // Show location modal on first visit
    const timer = setTimeout(() => {
      setShowLocationModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnableLocation = () => {
    setLocationEnabled(true);
    // Simulate location detection - randomly set if user is in Africa
    const inAfrica = Math.random() > 0.5;
    setIsInAfrica(inAfrica);
    setShowLocationModal(false);
  };

  const nearbyPlaces = places.slice(0, 3);
  const featuredCountries = countries.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Location Permission Modal */}
      <LocationPermissionModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onEnable={handleEnableLocation}
      />

      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="bg-gradient-to-r from-[#d4a574] to-[#f59e0b] bg-clip-text font-bold text-transparent">
                AfricaDiscover
              </h1>
              {locationEnabled && (
                <p className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin className="h-3 w-3" />
                  {isInAfrica ? "En Afrique" : "Hors Afrique"}
                </p>
              )}
            </div>
          </div>
          <button className="rounded-full p-2 hover:bg-white/10">
            <Heart className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="mb-2 text-3xl font-bold text-white">
            {isInAfrica && locationEnabled
              ? "Découvrez autour de vous"
              : "Explorez l'Afrique"}
          </h2>
          <p className="text-gray-400">
            {isInAfrica && locationEnabled
              ? "Les meilleurs lieux et activités à proximité"
              : "Commencez votre voyage à travers le continent"}
          </p>
        </motion.div>

        {/* Nearby Places (if in Africa) */}
        {isInAfrica && locationEnabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <MapPin className="h-5 w-5 text-[#d4a574]" />
                À proximité
              </h3>
              <Link to="/explore" className="text-sm text-[#d4a574]">
                Voir tout
              </Link>
            </div>

            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={`/place/${place.id}`}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="mb-1 font-medium text-white group-hover:text-[#d4a574]">
                        {place.name}
                      </h4>
                      <p className="mb-2 text-sm text-gray-400">
                        {place.country}
                      </p>
                      <span className="inline-block rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs text-[#d4a574]">
                        {place.category}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Featured Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isInAfrica && locationEnabled ? 0.4 : 0.1 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <Sparkles className="h-5 w-5 text-[#f59e0b]" />
              {isInAfrica && locationEnabled
                ? "Explorer d'autres pays"
                : "Destinations populaires"}
            </h3>
            <Link to="/explore" className="text-sm text-[#d4a574]">
              Voir tout
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredCountries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (isInAfrica && locationEnabled ? 0.5 : 0.2) + index * 0.1,
                }}
              >
                <Link
                  to={`/country/${country.id}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02]"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="mb-1 font-bold text-white">
                        {country.name}
                      </h4>
                      <p className="text-xs text-gray-300">
                        {country.places} lieux
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trending Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <TrendingUp className="h-5 w-5 text-[#ea580c]" />
            Tendances
          </h3>

          <div className="space-y-3">
            {[
              "Safari au Kenya : la grande migration",
              "Les pyramides de Gizeh en Égypte",
              "Plages paradisiaques de Zanzibar",
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-sm font-bold text-black">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-300">{trend}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
