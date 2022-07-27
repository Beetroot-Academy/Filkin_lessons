import HomePage from "@/components/pages/HomePage";
import MovieDetail from "@/components/pages/MovieDetail";

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
  ],
};
