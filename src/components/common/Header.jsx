import headerLogo from '../../assets/advLogoTransparent.png';
import { FaFacebookF, FaYoutube, FaTiktok, FaBars } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import SocialMediaButtons from './SocialMediaButtons';
import GradientButton from './GradientButton';
import HeaderMenuItems from './HeaderMenuItems';
import { useState } from 'react';
import MobileHeaderMenuItems from './MobileHeaderMenuItems';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const advertisersDropDown = [
    { name: 'Sign In', link: '/adv-signin' },
    { name: 'Register', link: '/pricing' },
    { name: 'Advertiser', link: '/' },
    { name: 'Plan', link: '/pricing' },
    { name: 'Host Network', link: '/registration' },
  ];

  const signInDropDown = [
    { name: 'Sign In as Advertiser', link: '/adv-signin' },
    { name: 'Sign In as Host', link: '/host-signin' },
  ];

  const hostDropDown = [
    { name: 'Sign In', link: '/host-signin' },
    { name: 'Register', link: '/host-signup' },
    { name: 'Host Overview', link: '/' },
  ];

  return (
    <header>
      <div className="flex flex-row items-center w-full justify-between z-[1000]">
        <div>
          <img src={headerLogo} alt="header-logo" className="h-[40px] lg:h-[50px] cursor-pointer" />
        </div>
        <div className="flex items-center gap-6 hidden lg:flex">
          <HeaderMenuItems name="Advertisers" dropDownMenu={advertisersDropDown} />
          <HeaderMenuItems name="Hosts" dropDownMenu={hostDropDown} />
        </div>
        <div className="flex lg:hidden items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            <FaBars />
          </button>
        </div>
        <div className="hidden lg:flex flex-row space-x-2 items-center">
          <SocialMediaButtons icon={<FaFacebookF size={20} />} link="https://www.facebook.com/advertiser" />
          <SocialMediaButtons icon={<RiInstagramFill size={25} />} link="https://www.instagram.com/advertiser" />
          <SocialMediaButtons icon={<FaYoutube size={25} />} link="https://www.youtube.com/advertiser" />
          <SocialMediaButtons icon={<FaTiktok size={20} />} link="https://www.tiktok.com/advertiser" />
          <GradientButton text="Contact Us" additionalCss="!ml-[2rem]" />
          <HeaderMenuItems name="Sign In" dropDownMenu={signInDropDown} additionalCss="py-1 px-3 rounded-full text-white bg-gradient-to-r from-pink-400 to-indigo-500 hover:!text-white"/>
        </div>
      </div>

      {isOpen && (
        <div className="z-[100] lg:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg p-4 flex flex-col pb-[1.5rem] space-y-4 rounded-b-2xl z-[1000]">
          <MobileHeaderMenuItems name="Advertisers" dropDownMenu={advertisersDropDown} />
          <MobileHeaderMenuItems name="Hosts" dropDownMenu={hostDropDown}/>
          <MobileHeaderMenuItems name="Sign In" dropDownMenu={signInDropDown}/>
        </div>
      )}
    </header>
  );
};

export default Header;