import Home from "../pages/static/home/home";
import Features from "../pages/static/features/features";
import About from "../pages/static/about/about";
import Login from "../pages/static/login/login";
import SignUp from "../pages/static/signUp/signUp";

const routesConfig = [
  {
    route: "/",
    component: Home,
    title:
      "Free Child Care Management Software, Free Daycare Management Software, Free Android, IPhone apps for Child Care Management, Free Android, IPhone apps for Daycare Management",
  },
  {
    route: "/home",
    component: Home,
    title:
      "Free Child Care Management Software, Free Daycare Management Software, Free Android, IPhone apps for Child Care Management, Free Android, IPhone apps for Daycare Management",
  },
  {
    route: "/features",
    component: Features,
    title: "GigglesWare Free Child Care Management features",
  },
  {
    route: "/about",
    component: About,
    title:
      "Free Child Care Management Software, Free Daycare Management Software, Free Android, IPhone apps for Child Care Management, Free Android, IPhone apps for Daycare Management",
  },
  {
    route: "/signUp",
    component: SignUp,
    title: "Sign Up as a family day care/parent",
  },
  {
    route: "/register",
    component: SignUp,
    title: "Register as a family day care/parent",
  },
  { route: "/login", component: Login, title: "Login" },
  { route: "/signIn", component: Login, title: "SignIn" },
];

export default routesConfig;
