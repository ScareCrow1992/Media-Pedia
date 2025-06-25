import { RouteObject } from "react-router-dom";
import AdminPage from "src/pages/AdminPage";
import AdminMoviesPage from "src/pages/AdminPage/MovieManager";
import AdminCastsPage from "src/pages/AdminPage/CastManager";
import MovieCreatePage from "src/pages/AdminPage/MovieManager/MovieCreatePage";
import MovieEditPage from "src/pages/AdminPage/MovieManager/MovieEditPage";
import CastCreatePage from "src/pages/AdminPage/CastManager/CastCreatePage";
import CastEditPage from "src/pages/AdminPage/CastManager/CastEditPage";

export const adminRoutes = (): RouteObject => ({
  path: "admin",
  element: <AdminPage />,
  children: [
    { path: "movies", element: <AdminMoviesPage /> },
    { path: "movies/create", element: <MovieCreatePage /> },
    { path: "movies/edit/:movie_id", element: <MovieEditPage/>},
    { path: "casts", element: <AdminCastsPage /> },
    { path: "casts/create", element: <CastCreatePage/>},
    { path: "casts/edit/:cast_id", element: <CastEditPage/>},

  ],
});