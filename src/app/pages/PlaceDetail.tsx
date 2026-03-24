import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Heart,
  Share2,
  Navigation,
  Calendar,
  Clock,
} from "lucide-react";
import { places } from "../data/mockData";

export function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = places.find((p) => p.id === id);

  if (!place) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <p className="text-gray-400">Lieu non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Image */}
      <div className="relative h-[50vh]">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

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
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Title & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-[#d4a574]/20 px-3 py-1 text-sm text-[#d4a574]">
              {place.category}
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-white">{place.name}</h1>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="h-5 w-5 text-[#d4a574]" />
            <span>{place.country}</span>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 grid grid-cols-3 gap-3"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <Clock className="mx-auto mb-2 h-6 w-6 text-[#d4a574]" />
            <div className="text-xs text-gray-400">Horaires</div>
            <div className="text-sm text-white">9h - 18h</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <Calendar className="mx-auto mb-2 h-6 w-6 text-[#d4a574]" />
            <div className="text-xs text-gray-400">Meilleure période</div>
            <div className="text-sm text-white">Toute l'année</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
            <Navigation className="mx-auto mb-2 h-6 w-6 text-[#d4a574]" />
            <div className="text-xs text-gray-400">Distance</div>
            <div className="text-sm text-white">2.5 km</div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="mb-3 text-xl font-bold text-white">À propos</h2>
          <p className="leading-relaxed text-gray-300">{place.description}</p>
          <p className="mt-4 leading-relaxed text-gray-300">
            Ce lieu emblématique offre une expérience unique pour découvrir la
            richesse culturelle et naturelle de l'Afrique. Que vous soyez
            passionné d'histoire, d'aventure ou de détente, vous trouverez ici
            des moments inoubliables.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="mb-3 text-xl font-bold text-white">Points forts</h2>
          <div className="space-y-2">
            {[
              "Vue panoramique exceptionnelle",
              "Riche patrimoine historique",
              "Expérience culturelle authentique",
              "Guides locaux expérimentés",
            ].map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b]" />
                <span className="text-sm text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="mb-3 text-xl font-bold text-white">Localisation</h2>
          <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-[#d4a574]" />
              <p className="text-sm text-gray-400">
                Latitude: {place.latitude.toFixed(4)}
              </p>
              <p className="text-sm text-gray-400">
                Longitude: {place.longitude.toFixed(4)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 pb-6"
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4a574] to-[#f59e0b] py-4 font-medium text-black shadow-lg shadow-[#d4a574]/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#d4a574]/40">
            <Navigation className="h-5 w-5" />
            Obtenir l'itinéraire
          </button>
          <button className="w-full rounded-xl border border-white/10 bg-white/5 py-4 font-medium text-white transition-all hover:bg-white/10">
            Ajouter au voyage
          </button>
        </motion.div>
      </div>
    </div>
  );
}
