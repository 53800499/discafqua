import { createBrowserRouter } from "react-router";
import { Onboarding } from "./pages/Onboarding";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { CountryDetail } from "./pages/CountryDetail";
import { PlaceDetail } from "./pages/PlaceDetail";
import { Stories } from "./pages/Stories";
import { Profile } from "./pages/Profile";
import { ExploreAround } from "./pages/ExploreAround";
import { PlaceNavigation } from "./pages/PlaceNavigation";
import { StoryView } from "./pages/StoryView";
import { TourGuides } from "./pages/TourGuides";
import { Gastronomy } from "./pages/Gastronomy";
import { Accommodations } from "./pages/Accommodations";
import { Activities } from "./pages/Activities";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Onboarding,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/explore",
    Component: Explore,
  },
  {
    path: "/explore-around",
    Component: ExploreAround,
  },
  {
    path: "/country/:id",
    Component: CountryDetail,
  },
  {
    path: "/place/:id",
    Component: PlaceDetail,
  },
  {
    path: "/navigate/:id",
    Component: PlaceNavigation,
  },
  {
    path: "/story/:id",
    Component: StoryView,
  },
  {
    path: "/guides",
    Component: TourGuides,
  },
  {
    path: "/stories",
    Component: Stories,
  },
  {
    path: "/gastronomy",
    Component: Gastronomy,
  },
  {
    path: "/accommodations",
    Component: Accommodations,
  },
  {
    path: "/activities",
    Component: Activities,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);