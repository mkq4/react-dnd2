import HomePage from "./components/pages/HomePage";
import AuthPage from "./components/pages/AuthPage";
import PrivatePage from "./components/pages/PrivatePage";


export const publicRoutes = [
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/auth",
        Component: AuthPage
    }
]

export const privateRoutes = [
    {
        path: "/private",
        Component: PrivatePage
    }
]