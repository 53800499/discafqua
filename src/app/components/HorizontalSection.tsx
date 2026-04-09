import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface HorizontalSectionProps {
  title: string;
  viewMoreLink: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function HorizontalSection({
  title,
  viewMoreLink,
  icon,
  children,
}: HorizontalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between px-6">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          {icon}
          {title}
        </h2>
        <Link
          to={viewMoreLink}
          className="group flex items-center gap-1 text-sm font-medium text-[#d4a574] transition-all hover:gap-2"
        >
          Voir plus
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="scrollbar-hide overflow-x-auto">
        <div className="flex gap-4 px-6 pb-2">{children}</div>
      </div>
    </motion.section>
  );
}
