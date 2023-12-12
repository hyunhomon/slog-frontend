import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MenuLayout from "./layout/MenuLayout";
import HomePage from "./page/HomePage";
import ShortsPage from "./page/ShortsPage";
import SubscribePage from "./page/SubscribePage";
import ProfilePage from "./page/ProfilePage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MenuLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: "shorts",
                        element: <ShortsPage />
                    },
                    {
                        path: "subscribe",
                        element: <SubscribePage />
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />
                    }
                ]
            }
        ]
    }
]);

export default router;
