import { RouteObject } from "react-router-dom";

/* Pages */
import UserProfilePage from "src/pages/UserProfilePage";
import UserReviewListPage from "src/pages/UserProfilePage/Reviews";


/* Components */
import ErrorComponent from "src/components/common/ErrorComponent";

export const profileRoutes = (): RouteObject[] => ([
  { path: "", element: <UserProfilePage />, errorElement: <ErrorComponent /> },
  { path: "reviews", element: <UserReviewListPage />, errorElement: <ErrorComponent /> }
]);