import HomePage from "@/components/pages/HomePage";
import MovieDetail from "@/components/pages/MovieDetail";
import SearchPage from "@/components/pages/SearchPage";

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
      name: "Movie Detail",
      component: MovieDetail,
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage,
    },
  ],
};
