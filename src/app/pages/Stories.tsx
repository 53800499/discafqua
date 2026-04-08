import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, MapPin } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { StoryReader } from "../components/StoryReader";
import { stories } from "../data/mockData";

export function Stories() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const story = stories.find((s) => s.id === selectedStory);

  if (selectedStory && story) {
    return <StoryReader story={story} onClose={() => setSelectedStory(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-2xl font-bold text-white">Histoires & Culture</h1>
        <p className="text-sm text-gray-400">
          Découvrez les récits qui ont façonné l'Afrique
        </p>
      </div>

      {/* Stories List */}
      <div className="px-6 py-6">
        <div className="space-y-4">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedStory(story.id)}
                className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div className="flex gap-4 p-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-32 w-32 rounded-xl object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="flex flex-1 flex-col text-left">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#d4a574]" />
                      <span className="text-sm text-[#d4a574]">
                        {story.country}
                      </span>
                    </div>
                    <h3 className="mb-2 font-bold text-white group-hover:text-[#d4a574]">
                      {story.title}
                    </h3>
                    <p className="mb-3 flex-1 text-sm text-gray-400">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      <span>{story.pages?.length || 1} pages</span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="mb-4 text-xl font-bold text-white">
            Collections thématiques
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "Royaumes et Empires",
                count: 12,
                color: "from-[#d4a574] to-[#f59e0b]",
              },
              {
                title: "Traditions et Cérémonies",
                count: 8,
                color: "from-[#f59e0b] to-[#ea580c]",
              },
              {
                title: "Personnages historiques",
                count: 15,
                color: "from-[#ea580c] to-[#d4a574]",
              },
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {collection.count} histoires
                    </p>
                  </div>
                  <div
                    className={`rounded-full bg-gradient-to-r ${collection.color} p-3`}
                  >
                    <BookOpen className="h-5 w-5 text-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}