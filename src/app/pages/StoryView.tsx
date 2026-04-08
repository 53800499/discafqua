import { useParams, useNavigate } from "react-router";
import { StoryReader } from "../components/StoryReader";
import { stories, places } from "../data/mockData";

export function StoryView() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find story by place id or story id
  const story =
    stories.find((s) => s.id === id) ||
    stories.find((s) => {
      const place = places.find((p) => p.id === id);
      return place && s.countryId === place.countryId;
    }) ||
    stories[0]; // Fallback to first story

  const handleClose = () => {
    navigate(-1);
  };

  return <StoryReader story={story} onClose={handleClose} />;
}
