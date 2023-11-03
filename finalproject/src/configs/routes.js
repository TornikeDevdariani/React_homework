import routes from "../constants/routes";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signup/SignUp";
import NotFound from "../pages/notfound/NotFound";
import AuthGuard from "../guards/authGuard";
import Series from "../pages/series/Series";
export const appRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.movies,
    component: Movies,
    Guard: AuthGuard,
  },
  {
    path: routes.series,
    component: Series,
    Guard: AuthGuard,
  },
  {
    path: routes.signIn,
    component: SignIn,
  },
  {
    path: routes.signUp,
    component: SignUp,
  },
  {
    path: routes.notFound,
    component: NotFound,
  },
];
