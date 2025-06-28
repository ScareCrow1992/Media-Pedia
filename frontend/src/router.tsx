import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ReviewsPage from "./pages/ReviewsPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminPage from "./pages/AdminPage";
import { adminRoutes } from "./routes/adminRoutes";

/* NotFound pages */
import NotFoundPage from "./pages/NotFoundPage";
import NotFoundRootPage from "./pages/NotFoundRootPage";
import ReviewDetailPage from "./pages/ReviewDetailPage";
import UserReviewListPage from "./pages/UserProfilePage/Reviews";
import { profileRoutes } from "./routes/profileRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage />, errorElement: <NotFoundPage /> }, // 기본 자식
      { path: "movies/:id", element: <MovieDetailPage />, errorElement: <NotFoundPage /> },
      { path: "reviews/:id", element: <ReviewsPage />, errorElement: <NotFoundPage /> },
      { path: "user/:id", 
        errorElement : <NotFoundPage></NotFoundPage>,
        children : [
          ...profileRoutes()
        ]
      },
      // {
      //   path: "user/:id", element: <UserProfilePage />, errorElement: <NotFoundPage />,
      //   children: [
      //     { path: "reviews", element: <UserReviewListPage />, errorElement: <NotFoundPage /> }
      //   ]
      // },
      { path: "cast/:id", element: <UserProfilePage />, errorElement: <NotFoundPage /> },
      { path: "review_detail/:review_id", element: <ReviewDetailPage />, errorElement: <NotFoundPage /> },
      ...adminRoutes()
    ],
    errorElement: <NotFoundRootPage />
  },
]);