import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "../page/user/404page";
import LoginForm from "../page/auth/login";

const AnimatedComponent = lazy(() => import("../page/user/animate"));
const HelpCenter = lazy(() => import("../page/user/support/payFlow/component/helpCenter"));
const PayFlow = lazy(() => import("../page/user/support/payFlow"));
const RegistrationFlow = lazy(() => import("../page/user/support/registratiotonFlow"));
const OrderCheck = lazy(() => import("../page/user/Order"));
const Registration = lazy(() => import("../page/user/registration"));
const Mgm = lazy(() => import("../page/user/mgm"));
const Business = lazy(() => import("../page/user/ourProduct/business"));
const Enterprise = lazy(() => import("../page/user/ourProduct/enterprice"));
const Broadband = lazy(() => import("../page/user/ourProduct/broadband"));
const AllNews = lazy(() => import("../page/user/allNews"));
const ArticleSection = lazy(() => import("../page/user/newsDetail"));
const News = lazy(() => import("../page/user/news"));
const Contact = lazy(() => import("../page/user/contact"));
const UserDashboard = lazy(() => import("./userDashboard"));
const Home = lazy(() => import("../page/user/home"));
const About = lazy(() => import("../page/user/about"));


const LoadingFallback = () => <div>Loading...</div>;

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