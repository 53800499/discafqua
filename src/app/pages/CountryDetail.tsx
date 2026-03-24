import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Heart, Share2 } from "lucide-react";
import { countries, places } from "../data/mockData";

export function CountryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const country = countries.find((c) => c.id === id);
  const countryPlaces = places.filter((p) => p.countryId === id);

  if (!country) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-gray-400">Pays non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Image */}
      <div className="relative h-[60vh]">
        <img
          src={country.image}
          alt={country.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />

        {/* Top Bar */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-black/50 p-3 backdrop-blur-sm transition-all hover:bg-black/70"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <div className="flex gap-3">
            <button className="rounded-full bg-black/50 p-3 backdrop-blur-sm transition-all hover:bg-black/70">
              <Share2 className="h-6 w-6 text-white" />
            </button>
            <button className="rounded-full bg-black/50 p-3 backdrop-blur-sm transition-all hover:bg-black/70">
              <Heart className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Country Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#d4a574]" />
              <span className="text-[#d4a574]">{country.continent}</span>
            </div>
            <h1 className="mb-3 text-4xl font-bold text-white">
              {country.name}
            </h1>
            <p className="max-w-2xl text-lg text-gray-300">
              {country.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 grid grid-cols-3 gap-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
            <div className="mb-1 bg-gradient-to-r from-[#d4a574] to-[#f59e0b] bg-clip-text text-2xl font-bold text-transparent">
              {country.places}
            </div>
            <div className="text-sm text-gray-400">Lieux</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
            <div className="mb-1 bg-gradient-to-r from-[#d4a574] to-[#f59e0b] bg-clip-text text-2xl font-bold text-transparent">
              4.8
            </div>
            <div className="text-sm text-gray-400">Note</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
            <div className="mb-1 bg-gradient-to-r from-[#d4a574] to-[#f59e0b] bg-clip-text text-2xl font-bold text-transparent">
              12k
            </div>
            <div className="text-sm text-gray-400">Visiteurs</div>
          </div>
        </motion.div>

        {/* Places to Visit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-white">
            Lieux à visiter
          </h2>

          {countryPlaces.length === 0 ? (
            <p className="text-gray-400">
              Aucun lieu disponible pour ce pays
            </p>
          ) : (
            <div className="space-y-4">
              {countryPlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={`/place/${place.id}`}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <div className="flex gap-4 p-4">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="h-24 w-24 rounded-xl object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 font-bold text-white group-hover:text-[#d4a574]">
                          {place.name}
                        </h3>
                        <p className="mb-3 text-sm text-gray-400">
                          {place.description}
                        </p>
                        <span className="inline-block rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs text-[#d4a574]">
                          {place.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button className="w-full rounded-xl bg-gradient-to-r from-[#d4a574] to-[#f59e0b] py-4 font-medium text-black shadow-lg shadow-[#d4a574]/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#d4a574]/40">
            Planifier mon voyage
          </button>
        </motion.div>
      </div>
    </div>
  );
}
