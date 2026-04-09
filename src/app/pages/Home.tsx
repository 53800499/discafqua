import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MapPin,
  Heart,
  UtensilsCrossed,
  Hotel,
  Users,
  Sparkles,
  BookOpen,
  Navigation,
} from "lucide-react";
import { LocationPermissionModal } from "../components/LocationPermissionModal";
import { BottomNav } from "../components/BottomNav";
import { HorizontalSection } from "../components/HorizontalSection";
import {
  dishes,
  accommodations,
  tourGuides,
  activities,
  stories,
  places,
} from "../data/mockData";
import logo from "../../assets/logo.png";

export function Home() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [isInAfrica, setIsInAfrica] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLocationModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnableLocation = () => {
    setLocationEnabled(true);
    const inAfrica = Math.random() > 0.5;
    setIsInAfrica(inAfrica);
    setShowLocationModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Location Permission Modal */}
      <LocationPermissionModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onEnable={handleEnableLocation}
      />

      {/* Sticky Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <div>
              <h1 className="bg-gradient-to-r from-[#d4a574] to-[#f59e0b] bg-clip-text text-lg font-bold text-transparent">
                DISCAFQUA
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

      {/* Hero Section - Full Bleed */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-[60vh] overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="African landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent" />
        </motion.div>

        <div className="relative flex h-full items-end px-6 pb-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-5xl font-bold leading-tight text-white"
            >
              {isInAfrica && locationEnabled
                ? "Découvrez l'Afrique autour de vous"
                : "Explorez la magie de l'Afrique"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-lg text-gray-300"
            >
              {isInAfrica && locationEnabled
                ? "Vivez des expériences uniques à proximité"
                : "Cultures vibrantes, paysages époustouflants, histoires fascinantes"}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4a574] to-[#f59e0b] px-8 py-4 font-bold text-black shadow-xl shadow-[#d4a574]/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/40"
              >
                Commencer l'exploration
                <Sparkles className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="relative z-10 mt-8 space-y-4">
        {/* Nearby Places (if in Africa) */}
        {isInAfrica && locationEnabled && (
          <HorizontalSection
            title="À proximité de vous"
            viewMoreLink="/explore-around"
            icon={<Navigation className="h-6 w-6 text-[#ea580c]" />}
          >
            {places.slice(0, 5).map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/place/${place.id}`}
                  className="group block w-72 flex-shrink-0"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#d4a574]/50 hover:shadow-xl hover:shadow-[#d4a574]/20">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="mb-1 text-lg font-bold text-white">
                          {place.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">
                            {place.country}
                          </span>
                          <span className="rounded-full bg-[#d4a574]/20 px-3 py-1 text-xs font-medium text-[#d4a574]">
                            {place.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </HorizontalSection>
        )}

        {/* Gastronomy Section */}
        <HorizontalSection
          title="Gastronomie africaine"
          viewMoreLink="/gastronomy"
          icon={<UtensilsCrossed className="h-6 w-6 text-[#f59e0b]" />}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group w-64 flex-shrink-0"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#f59e0b]/50 hover:shadow-xl hover:shadow-[#f59e0b]/20">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="mb-1 font-bold text-white">{dish.name}</h3>
                    <p className="mb-2 text-xs text-gray-300">
                      {dish.country}
                    </p>
                    <span className="inline-block rounded-full bg-[#f59e0b]/20 px-3 py-1 text-xs text-[#f59e0b]">
                      {dish.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </HorizontalSection>

        {/* Accommodations Section */}
        <HorizontalSection
          title="Hébergements"
          viewMoreLink="/accommodations"
          icon={<Hotel className="h-6 w-6 text-[#d4a574]" />}
        >
          {accommodations.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group w-80 flex-shrink-0"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#d4a574]/50 hover:shadow-xl hover:shadow-[#d4a574]/20">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold text-white">{hotel.name}</h3>
                  <p className="mb-2 text-sm text-gray-400">
                    {hotel.location}, {hotel.country}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-[#f59e0b]">★</span>
                      <span className="text-sm font-medium text-white">
                        {hotel.rating}
                      </span>
                    </div>
                    <span className="font-bold text-[#d4a574]">
                      ${hotel.pricePerNight}
                      <span className="text-xs text-gray-400">/nuit</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </HorizontalSection>

        {/* Tour Guides Section */}
        <HorizontalSection
          title="Guides touristiques"
          viewMoreLink="/guides"
          icon={<Users className="h-6 w-6 text-[#ea580c]" />}
        >
          {tourGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group w-64 flex-shrink-0"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#ea580c]/50 hover:shadow-xl hover:shadow-[#ea580c]/20">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={guide.photo}
                    alt={guide.name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-[#ea580c]/50"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{guide.name}</h3>
                    <p className="text-xs text-gray-400">{guide.experience}</p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-[#d4a574]">{guide.specialty}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#f59e0b]">★</span>
                    <span className="text-sm font-medium text-white">
                      {guide.rating}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    ${guide.pricePerHour}/h
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </HorizontalSection>

        {/* Activities Section */}
        <HorizontalSection
          title="Activités & expériences"
          viewMoreLink="/activities"
          icon={<Sparkles className="h-6 w-6 text-[#10b981]" />}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group w-72 flex-shrink-0"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#10b981]/50 hover:shadow-xl hover:shadow-[#10b981]/20">
                <div className="relative aspect-[4/3] overflow-hidden">
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
                    <h3 className="mb-1 font-bold text-white">
                      {activity.name}
                    </h3>
                    <p className="mb-2 text-xs text-gray-300">
                      {activity.duration} • {activity.country}
                    </p>
                    <span className="font-bold text-[#d4a574]">
                      ${activity.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </HorizontalSection>

        {/* Culture & Stories Section */}
        <HorizontalSection
          title="Culture & histoires"
          viewMoreLink="/stories"
          icon={<BookOpen className="h-6 w-6 text-[#d4a574]" />}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/story/${story.id}`}
                className="group block w-80 flex-shrink-0"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-[#d4a574]/50 hover:shadow-xl hover:shadow-[#d4a574]/20">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {story.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-gray-400">
                      {story.excerpt}
                    </p>
                    <span className="text-xs text-[#d4a574]">
                      {story.country}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </HorizontalSection>
      </div>

      <BottomNav />
    </div>
  );
}
