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
    path: "/country/:id",
    Component: CountryDetail,
  },
  {
    path: "/place/:id",
    Component: PlaceDetail,
  },
  {
    path: "/stories",
    Component: Stories,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
