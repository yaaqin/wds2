import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './page/user/home';
import About from './page/user/about';
import NotFound from './page/user/404page';
import UserDashboard from './route/userDashboard';
import AdminDashboard from './route/adminDashboard';
import AdminHome from './page/admin/home';
import LoginAdmin from './page/admin/login';
import News from './page/user/news';
import Contact from './page/user/contact';
import Broadband from './page/user/ourProduct/broadband';
import Enterprise from './page/user/ourProduct/enterprice';
import Business from './page/user/ourProduct/business';
import Mgm from './page/user/mgm';
import AllNews from './page/user/allNews';
import RegistrationFlow from './page/user/support/registratiotonFlow';
import LoginForm from './page/auth/login';
import PayFlow from './page/user/support/payFlow';
import Registration from './page/user/registration';
import OrderCheck from './page/user/Order';
import HelpCenter from './page/user/support/payFlow/component/helpCenter';
import AnimatedComponent from './page/user/animate';
import ArticleSection from './page/user/newsDetail';
import ScrollToTop from './component/scrollHook';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* user path */}
        <Route path="/" element={<UserDashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="news/slug" element={<ArticleSection />} />
          <Route path="news/all" element={<AllNews />} />
          {/* Our Product */}
          <Route path="hanaplay/broadband" element={<Broadband />} />
          <Route path="hanaplay/enterprise" element={<Enterprise />} />
          <Route path="hanaplay/business" element={<Business />} />
          {/* secondary path */}
          <Route path="mgm" element={<Mgm />} />
          <Route path="registration" element={<Registration />} />
          <Route path="order-check" element={<OrderCheck />} />
          {/* Support Path */}
          <Route path="support/registration-flow" element={<RegistrationFlow />} />
          <Route path="support" element={<PayFlow />}>
            {/* <Route index element={<Faq />} /> */}
            <Route path="help-center" element={<HelpCenter />} />
          </Route>
          {/* other path */}
          <Route path="animate" element={<AnimatedComponent />} />
        </Route>
        {/* auth path */}
        <Route path="/login" element={<LoginForm />} />

        {/* admin path */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="login" element={<LoginAdmin />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
