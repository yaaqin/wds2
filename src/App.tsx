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

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      {/* user path */}
      <Route path="/" element={<UserDashboard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="news/all" element={<AllNews />} />
        <Route path="mgm" element={<Mgm />} />
        {/* Our Product */}
        <Route path="hanaplay/broadband" element={<Broadband />} />
        <Route path="hanaplay/enterprise" element={<Enterprise />} />
        <Route path="hanaplay/business" element={<Business />} />
      </Route>

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
