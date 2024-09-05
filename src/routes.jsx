import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import AdminSignin from './pages/SignIn/AdminSignIn';
import AdvSignUp from './pages/SignUp/AdvSignUp';
import Registration from './pages/Registration/Registrations';
import Pricing from './pages/Registration/Pricing';
import SharedLayout from './pages/SharedLayout.jsx/SharedLayout';
import HostHome from './pages/Host/HostHome';
import HostProfile from './pages/Host/HostProfile';
import HostPayment from './pages/Host/HostPayment';
import HostInstruction from './pages/Host/HostInstruction';
import AdvertiserProfile from './pages/Advertiser/AdvertiserProfile';
import AdvertiserPayment from './pages/Advertiser/AdvertiserPayment';
import AdvertiserInstruction from './pages/Advertiser/AdvertiserInstruction';
import AdvSignin from './pages/SignIn/AdvSignIn';
import AdvertiserHostNetwork from './pages/Advertiser/AdvertiserHostNetwork';
import AdvertiserPlans from './pages/Advertiser/AdvertiserPlans';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminHome from './pages/Admin/AdminHome';
import AdminHosts from './pages/Admin/AdminHosts';
import AdminMakePayment from './pages/Admin/AdminMakePayment';
import AdminAdvertisers from './pages/Admin/AdminAdvertisers';
import HostSignin from './pages/SignIn/HostSignin';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/host-signin" element={<HostSignin />} />
        <Route path="/host-signup" element={<SignUp />} />
        <Route path="/adv-signin" element={<AdvSignin />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route path="/adv-signup/:type/:id" element={<AdvSignUp />} />

        <Route path="/host/*" element={<SharedLayout usedFor="host" />}>
          <Route path="home" element={<HostHome />} />
          <Route path="profile" element={<HostProfile />} />
          <Route path="payment" element={<HostPayment />} />
          <Route path="instruction" element={<HostInstruction />} />
        </Route>

        <Route path="/advertiser/*" element={<SharedLayout usedFor="advertiser" />}>
          {/* <Route path="home" element={<Adv />} /> */}
          <Route path="profile" element={<AdvertiserProfile />} />
          <Route path="payment" element={<AdvertiserPayment />} />
          <Route path="instruction" element={<AdvertiserInstruction />} />
          <Route path="hosts" element={<AdvertiserHostNetwork />} />
          <Route path="plans" element={<AdvertiserPlans />} />
        </Route>

        <Route path="/admin/*" element={<SharedLayout usedFor="admin" />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="payment" element={<AdminMakePayment />} />
          <Route path="hosts" element={<AdminHosts />} />
          <Route path="advertisements" element={<AdminAdvertisers />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
