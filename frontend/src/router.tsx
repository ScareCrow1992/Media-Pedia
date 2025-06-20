import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ReviewsPage from "./pages/ReviewsPage";
import UserProfilePage from "./pages/UserProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <HomePage /> }, // 기본 자식
            { path: "movies/:id", element: <MovieDetailPage /> },
            { path: "reviews/:id", element: <ReviewsPage/>},
            { path: "user/:id", element: <UserProfilePage/>}
            // TODO: signup, login, mypage 등 추가 예정
        ],
    },
]);