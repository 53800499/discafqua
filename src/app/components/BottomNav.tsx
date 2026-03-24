import { Link, useLocation } from "react-router";
import { Home, Compass, BookOpen, User } from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { path: "/home", icon: Home, label: "Accueil" },
  { path: "/explore", icon: Compass, label: "Explorer" },
  { path: "/stories", icon: BookOpen, label: "Histoires" },
  { path: "/profile", icon: User, label: "Profil" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-lg items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center gap-1 py-2"
            >
              <div className="relative">
                <Icon
                  className={`h-6 w-6 transition-colors ${
                    isActive ? "text-[#d4a574]" : "text-gray-400"
                  }`}
                />
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-r from-[#d4a574]/20 to-[#f59e0b]/20"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </div>
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-[#d4a574]" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
