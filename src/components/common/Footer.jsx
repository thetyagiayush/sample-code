import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import advLogo from "../../assets/advLogoTransparent.png";
import SocialMediaButtons from "./SocialMediaButtons";
import { RiInstagramFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="">
      <div className="bg-[#7A66FB1A] rounded-2xl w-full p-[2rem] lg:flex justify-between mt-[2rem]">
        <div className="space-y-5 md:space-y-3 lg:w-[27%] flex flex-col items-center lg:items-start justify-center">
          <img src={advLogo} alt="advLogo" className="w-[25rem] lg:w-[10rem]" />
          <div className="text-xs text-slate-500">
            Advertisers create ads. Hosts provide ad space.
            This forms the digital advertising ecosystem.
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <SocialMediaButtons
              icon={<FaFacebookF size={15} className="text-white" />}
              addiCss="bg-gradient-to-r from-pink-400 to-indigo-500"
              link="https://www.facebook.com/advertiser"
            />
            <SocialMediaButtons
              icon={<RiInstagramFill size={15} className="text-white" />}
              addiCss="bg-gradient-to-r from-pink-400 to-indigo-500"
              link="https://www.instagram.com/advertiser"
            />
            <SocialMediaButtons
              icon={<FaYoutube size={15} className="text-white" />}
              addiCss="bg-gradient-to-r from-pink-400 to-indigo-500"
              link="https://www.youtube.com/advertiser"
            />
            <SocialMediaButtons
              icon={<FaTiktok size={15} className="text-white" />}
              addiCss="bg-gradient-to-r from-pink-400 to-indigo-500"
              link="https://www.tiktok.com/advertiser"
            />
          </div>
        </div>
        <div className="lg:w-[33%] flex flex-row items-center justify-center gap-[3rem]  mt-[2rem] lg:mt-0">
          <div className="space-y-3">
            <div className="text-black text-lg">
              Quick Links
            </div>
            <div onClick={() => navigate('/adv-signin')} className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Advertisers
            </div>
            <div onClick={() => navigate('/host-signin')} className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Hosts
            </div>
            <div onClick={() => navigate('/pricing')} className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Pricing
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-black text-lg">
              Legal
            </div>
            <div className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Privacy Policy
            </div>
            <div className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Terms of Service
            </div>
            <div className="text-sm text-slate-500 cursor-pointer hover:text-black">
              Cookie Policy
            </div>
          </div>
        </div>
        <div className="lg:w-[26%] flex flex-col lg:items-start items-center mt-[2rem] lg:mt-0">
          <div className="text-sm text-slate-500">
            &copy; 2024. Advertiser LCC
          </div>
          <div className="rounded-xl bg-gradient-to-r from-pink-400 to-indigo-500 h-[6rem] flex flex-col justify-center items-center w-full mt-[1rem] p-3 max-w-[20rem]">
            <div className="text-sm text-slate-50">
              Questions? Email Us at
            </div>
            <div>
              <a href="mailto:advertiser@info.com" className="hover:text-blue-100 myfont-bold text-white text-lg cursor-pointer">
                advertiser@info.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;