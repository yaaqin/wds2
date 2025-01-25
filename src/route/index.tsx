import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserDashboard from "./userDashboard";
import Home from "../page/user/home";
import About from "../page/user/about";
import NotFound from "../page/user/404page";
import LoginForm from "../page/auth/login";
import AnimatedComponent from "../page/user/animate";
import HelpCenter from "../page/user/support/payFlow/component/helpCenter";
import PayFlow from "../page/user/support/payFlow";
import RegistrationFlow from "../page/user/support/registratiotonFlow";
import OrderCheck from "../page/user/Order";
import Registration from "../page/user/registration";
import Mgm from "../page/user/mgm";
import Business from "../page/user/ourProduct/business";
import Enterprise from "../page/user/ourProduct/enterprice";
import Broadband from "../page/user/ourProduct/broadband";
import AllNews from "../page/user/allNews";
import ArticleSection from "../page/user/newsDetail";
import News from "../page/user/news";
import { Contact } from "lucide-react";

const LoadingFallback = () => <p>Loading...</p>;

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingFallback />}>
                <UserDashboard />
            </Suspense>
        ),
        children: [
            { index: true, element: (<Home />) },
            { path: "about", element: (<About />) },
            { path: "contact", element: (<Contact />) },
            { path: "news", element: (<News />) },
            { path: "news/slug", element: (<ArticleSection />) },
            { path: "news/all", element: (<AllNews />) },
            { path: "hanaplay/broadband", element: (<Broadband />) },
            { path: "hanaplay/enterprise", element: (<Enterprise />) },
            { path: "hanaplay/business", element: (<Business />) },
            { path: "mgm", element: (<Mgm />) },
            { path: "registration", element: (<Registration />) },
            { path: "order-check", element: (<OrderCheck />) },
            { path: "support/registration-flow", element: (<RegistrationFlow />) },
            { path: "support", element: (<PayFlow />), children: [{ path: "help-center", element: (<HelpCenter />), },] },
            { path: "animate", element: (<AnimatedComponent />) },
        ],
    },
    { path: "/login", element: (<LoginForm />) },
    { path: "*", element: (<NotFound />), },
]);