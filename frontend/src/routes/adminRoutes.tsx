import { RouteObject } from "react-router-dom";

/* Pages */
import AdminPage from "src/pages/AdminPage";
import AdminMoviesPage from "src/pages/AdminPage/MovieManager";
import AdminCastsPage from "src/pages/AdminPage/CastManager";
import MovieCreatePage from "src/pages/AdminPage/MovieManager/MovieCreatePage";
import MovieEditPage from "src/pages/AdminPage/MovieManager/MovieEditPage";
import CastCreatePage from "src/pages/AdminPage/CastManager/CastCreatePage";
import CastEditPage from "src/pages/AdminPage/CastManager/CastEditPage";

import AdminReportManager from "src/pages/AdminPage/ReportManager";

/* Components */
import ErrorComponent from "src/components/common/ErrorComponent";

export const adminRoutes = (): RouteObject[] => ([{
  path: "admin",
  element: <AdminPage />,
  children: [
    { path: "movies", element: <AdminMoviesPage />, errorElement: <ErrorComponent /> },
    { path: "movies/create", element: <MovieCreatePage />, errorElement: <ErrorComponent /> },
    { path: "movies/edit/:movie_id", element: <MovieEditPage />, errorElement: <ErrorComponent /> },
    { path: "casts", element: <AdminCastsPage />, errorElement: <ErrorComponent /> },
    { path: "casts/create", element: <CastCreatePage />, errorElement: <ErrorComponent /> },
    { path: "casts/edit/:cast_id", element: <CastEditPage />, errorElement: <ErrorComponent /> },
    
    { path: "reports", element: <AdminReportManager></AdminReportManager>, errorElement: <ErrorComponent /> }

  ],
  errorElement: <ErrorComponent />

}]);