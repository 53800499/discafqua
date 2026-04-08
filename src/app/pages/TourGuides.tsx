import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Star,
  MessageCircle,
  Phone,
  Globe,
  CheckCircle,
  X,
} from "lucide-react";
import { tourGuides } from "../data/mockData";

export function TourGuides() {
  const navigate = useNavigate();
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guide = selectedGuide
    ? tourGuides.find((g) => g.id === selectedGuide)
    : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-8">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <h1 className="flex-1 text-center font-bold text-white">
            Guides locaux
          </h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#d4a574]/20 to-[#f59e0b]/10 p-6 backdrop-blur-sm"
        >
          <h2 className="mb-2 text-xl font-bold text-white">
            Explorez avec un expert local
          </h2>
          <p className="text-gray-400">
            Nos guides certifiés vous feront découvrir les secrets et l'histoire
            de chaque site
          </p>
        </motion.div>

        {/* Guides List */}
        <div className="space-y-4">
          {tourGuides.map((tourGuide, index) => (
            <motion.div
              key={tourGuide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`overflow-hidden rounded-2xl border transition-all ${
                tourGuide.available
                  ? "border-white/10 bg-white/5"
                  : "border-white/5 bg-white/[0.02] opacity-60"
              }`}
            >
              <div className="flex gap-4 p-4">
                {/* Photo */}
                <div className="relative h-24 w-24 flex-shrink-0">
                  <img
                    src={tourGuide.photo}
                    alt={tourGuide.name}
                    className="h-full w-full rounded-xl object-cover"
                  />
                  {tourGuide.available && (
                    <div className="absolute -right-1 -top-1 rounded-full bg-green-500 p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="mb-1 font-bold text-white">
                      {tourGuide.name}
                    </h3>
                    <p className="mb-2 text-sm text-[#d4a574]">
                      {tourGuide.specialty}
                    </p>
                    <div className="mb-2 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="text-sm font-medium text-white">
                        {tourGuide.rating}
                      </span>
                      <span className="text-sm text-gray-400">
                        • {tourGuide.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tourGuide.languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-gray-300"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex border-t border-white/10 bg-white/5">
                <button
                  onClick={() => setSelectedGuide(tourGuide.id)}
                  disabled={!tourGuide.available}
                  className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 px-4 py-3 font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-50"
                >
                  <Globe className="h-5 w-5" />
                  <span className="text-sm">Voir profil</span>
                </button>
                <button
                  disabled={!tourGuide.available}
                  className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 px-4 py-3 font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-50"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">Message</span>
                </button>
                <button
                  disabled={!tourGuide.available}
                  className="flex flex-1 items-center justify-center gap-2 px-4 py-3 font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-50"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">Appeler</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Guide Detail Modal */}
      {guide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="w-full max-w-2xl overflow-hidden rounded-t-3xl border-t border-white/10 bg-[#0a0a0a]"
          >
            {/* Close Button */}
            <div className="flex justify-end border-b border-white/10 px-6 py-4">
              <button
                onClick={() => setSelectedGuide(null)}
                className="rounded-full p-2 transition-colors hover:bg-white/10"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-6">
              {/* Photo & Name */}
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={guide.photo}
                  alt={guide.name}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h2 className="mb-1 text-2xl font-bold text-white">
                    {guide.name}
                  </h2>
                  <p className="mb-2 text-[#d4a574]">{guide.specialty}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="font-bold text-white">
                        {guide.rating}
                      </span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{guide.experience}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="mb-3 font-bold text-white">Langues parlées</h3>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-[#d4a574] bg-[#d4a574]/10 px-4 py-2 text-sm font-medium text-[#d4a574]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="mb-2 font-bold text-white">Tarif</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#d4a574]">
                    {guide.pricePerHour}€
                  </span>
                  <span className="text-gray-400">/ heure</span>
                </div>
              </div>

              {/* About */}
              <div className="mb-6">
                <h3 className="mb-3 font-bold text-white">À propos</h3>
                <p className="leading-relaxed text-gray-400">
                  Guide professionnel avec {guide.experience.toLowerCase()}.
                  Spécialisé dans {guide.specialty.toLowerCase()}, je vous ferai
                  découvrir les secrets les mieux gardés et l'histoire fascinante
                  de chaque lieu.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-medium text-white transition-all hover:bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                  Envoyer un message
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b] px-6 py-4 font-bold text-black transition-all hover:scale-105">
                  <Phone className="h-5 w-5" />
                  Réserver
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
