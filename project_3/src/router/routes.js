import HomePage from "@/components/pages/HomePage";
import SearchPage from "@/components/pages/SearchPage";
import MovieDetails from "@/components/pages/MovieDetails";

export default {
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/movie/:id",
      name: "Movie Details",
      component: MovieDetails,
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage,
    },
  ],
};
