import { motion } from "motion/react";
import {
  User,
  MapPin,
  Heart,
  BookOpen,
  Settings,
  Bell,
  Globe,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function Profile() {
  const stats = [
    { label: "Pays visités", value: "5", icon: Globe },
    { label: "Lieux favoris", value: "23", icon: Heart },
    { label: "Histoires lues", value: "12", icon: BookOpen },
  ];

  const menuItems = [
    { icon: Settings, label: "Paramètres", badge: null },
    { icon: Bell, label: "Notifications", badge: "3" },
    { icon: MapPin, label: "Localisation", badge: null },
    { icon: Globe, label: "Langue", badge: "Français" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] via-[#f59e0b] to-[#ea580c]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20" />
      </div>

      {/* Profile Card */}
      <div className="relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="-mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 backdrop-blur-xl"
        >
          {/* Avatar & Name */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a574] to-[#f59e0b]">
              <User className="h-10 w-10 text-black" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-2xl font-bold text-white">
                Voyageur Africain
              </h2>
              <p className="text-sm text-gray-400">voyageur@email.com</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 h-6 w-6 text-[#d4a574]" />
                  <div className="mb-1 text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 space-y-2"
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="rounded-full bg-gradient-to-br from-[#d4a574]/20 to-[#f59e0b]/20 p-3">
                  <Icon className="h-5 w-5 text-[#d4a574]" />
                </div>
                <span className="flex-1 text-left text-white">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="rounded-full bg-[#d4a574] px-3 py-1 text-xs text-black">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </button>
            );
          })}
        </motion.div>

        {/* Premium Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#d4a574]/20 via-[#f59e0b]/10 to-transparent p-6"
        >
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-bold text-white">
              Passez à Premium
            </h3>
            <p className="text-sm text-gray-300">
              Débloquez des guides exclusifs, des itinéraires personnalisés et
              bien plus encore
            </p>
          </div>
          <button className="w-full rounded-xl bg-gradient-to-r from-[#d4a574] to-[#f59e0b] py-3 font-medium text-black shadow-lg shadow-[#d4a574]/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#d4a574]/40">
            Découvrir Premium
          </button>
        </motion.div>

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-red-400 transition-all hover:bg-white/10"
        >
          <LogOut className="h-5 w-5" />
          <span>Se déconnecter</span>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
}
