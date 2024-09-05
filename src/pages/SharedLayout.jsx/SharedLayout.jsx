import { Outlet, useLocation, useNavigate } from "react-router-dom";
import advLogo from "../../assets/advLogoTransparent.png";
import ProfileDisplay from "../../components/common/ProfileDisplay";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileSharedLayoutMenu from "../../components/common/MobileSharedLayoutMenu";

const hostMenuOptions = [
  { name: 'Home', link: 'home' },
  { name: 'Profile', link: 'profile' },
  { name: 'Payment', link: 'payment' },
  { name: 'Instruction', link: 'instruction' },
];

const adminMenuOptions = [
  { name: 'Home', link: 'home' },
  { name: 'Profile', link: 'profile' },
  { name: 'Hosts', link: 'hosts' },
  { name: 'Advertisements', link: 'advertisements' },
];

const advertiserMenuOptions = [
  { name: 'Profile', link: 'profile' },
  { name: 'Payment', link: 'payment' },
  { name: 'Instruction', link: 'instruction' },
  { name: 'Hosts', link: 'hosts' },
  { name: 'Plans', link: 'plans' },
];

function SharedLayout({ usedFor }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(hostMenuOptions);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const profileDropDown = [
    { name: 'Support', link: '/support' },
    { name: 'Instructions', link: '/instruction' },
    { name: 'Logout', link: '/logout' },
  ];

  useEffect(() => {
    if (usedFor === 'host') {
      setActiveMenu(hostMenuOptions);
    } else if (usedFor === 'advertiser') {
      setActiveMenu(advertiserMenuOptions);
    } else if (usedFor === 'admin') {
      setActiveMenu(adminMenuOptions);
    }
  }, []);

  return (
    <>
      <div className="mx-[2rem] xl:mx-[10rem] my-[2rem] lg:my-[3rem]">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <img src={advLogo} alt="advLogo" className="w-[200px]" />
          </div>
          <div className="flex items-center gap-[1.5rem] hidden lg:flex">
            {activeMenu.map((item, index) => (
              <div key={index} onClick={() => navigate(item.link)} className={`cursor-pointer ${window.location.pathname.includes(item.link) ? 'text-black' : 'text-slate-500'}`}>
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex lg:hidden items-center">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              <FaBars />
            </button>
          </div>
          <div className="flex items-center hidden lg:flex">
            <ProfileDisplay />
          </div>
        </div>
        {isOpen && (
          <div className="z-[100] lg:hidden absolute top-[70px] left-0 w-full bg-white shadow-lg p-4 flex flex-col pb-[1.5rem] space-y-4 rounded-b-2xl">
            <MobileSharedLayoutMenu
              profileDropDown={profileDropDown}
              activeMenu={activeMenu}
            />
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default SharedLayout;