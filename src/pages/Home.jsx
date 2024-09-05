import Header from '../components/common/Header';
import { FaUsersGear, FaWallet } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";
import { MdOutlineAutoGraph, MdCampaign, MdGroups, MdKeyboardArrowDown } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbPuzzleFilled } from "react-icons/tb";
import HomeCarousel from '../components/Home/HomeCarousel';
import '../index.css';
import AdvertisersCard from '../components/Home/AdvertisersCard';
import host1 from '../assets/host1.png';
import host2 from '../assets/host2.png';
import host3 from '../assets/host3.png';
import host4 from '../assets/host4.png';
import host5 from '../assets/host5.png';
import host6 from '../assets/host6.png';
import host7 from '../assets/host7.png';
import Footer from '../components/common/Footer';
import MyMapComponent from '../components/Home/MyMapComponent';
import GradientButton from '../components/common/GradientButton';

function Home() {
  const AdvertisersMenuCardContent = [
    { icon: <FaUsersGear className="text-white" size={22} />, heading: "Target Your Audience", text: "Access a vast network of users across diverse demographics and locations." },
    { icon: <RxRocket className="text-white" size={22} />, heading: "Expand Your Reach", text: "Access a vast network of users across diverse demographics and locations." },
    { icon: <MdOutlineAutoGraph className="text-white" size={22} />, heading: "Measure Your Success", text: "Track campaign performance with detailed analytics and insights." },
    { icon: <BsGraphUpArrow className="text-white" size={22} />, heading: "Increase ROI", text: "Optimize your ad spend for maximum returns." },
    { icon: <MdCampaign className="text-white" size={22} />, heading: "Target Your Audience", text: "Easy-to-use platform for hassle-free campaign management." },
  ];

  const HostMenuCardContent = [
    { icon: <FaWallet className="text-white" size={22} />, heading: "Earn Passive Income", text: "Generate revenue by hosting ads on your digital space." },
    { icon: <MdGroups className="text-white" size={22} />, heading: "Reach a Wider Audience", text: "Increase visibility for your business or website." },
    { icon: <TbPuzzleFilled className="text-white" size={22} />, heading: "Flexible and Easy", text: "Simple sign-up process and hassle-free management." },
  ];

  return (
    <div className="mx-[2rem] xl:mx-[10rem] my-[2rem] lg:my-[3rem]">
      <Header />
      <div className="h-fit w-full bg-[#7A66FB1A] rounded-2xl my-[2rem] py-[2rem]">
        <HomeCarousel />
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center mt-[1rem]">
        <div className="w-full flex flex-row items-center justify-center myfont-bold text-[2rem]">
          Advertisers
        </div>
        <div className="w-full flex flex-row items-center justify-center myfont-regular text-[1rem]">
          Reach Millions and Boost Your Brand
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1rem] pt-[3rem]">
          {AdvertisersMenuCardContent.map((item, index) => (
            <AdvertisersCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center mt-[2rem]">
        <div className="w-full flex flex-row items-center justify-center myfont-bold text-[2rem]">
          Displaying Hosts
        </div>
        <div className="w-full border rounded-2xl border-slate-300 p-5 mt-[2rem]">
          <div className="w-full sm:flex items-center justify-between space-y-4 sm:space-y-0">
            <div className="md:flex gap-4 items-center">
              <div className="!w-fit text-lg myfont-bold mb-[1rem] md:mb-0">
                Hosts Network Overview
              </div>
              <div>
                <div className="!w-fit p-1 rounded-full shadow flex flex-row items-center border border-slate-400">
                  <span className="text-xs text-slate-500 cursor-pointer truncate">
                    Country:
                  </span>
                  <span className="text-xs text-slate-800 myfont-bold ml-1">
                    Hongkong
                  </span>
                  <span className="text-white cursor-pointer p-1 flex rounded-full border border-slate-300 bg-white ml-2">
                    <MdKeyboardArrowDown className="text-black" size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="!w-full text-sm text-slate-500 mt-[1rem] flex items-center justify-start">
            Here is your hosts network overview.
          </div>
          <div className="w-full h-[60vh] mt-[1rem] ">
            <MyMapComponent />
          </div>
          <div className="flex w-full items-center justify-center mt-[1rem]">
            <GradientButton text="More Details" additionalCss="!text-sm" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center mt-[2rem]">
        <div className="w-full flex flex-row items-center justify-center myfont-bold text-[2rem]">
          Hosts
        </div>
        <div className="w-full flex flex-row items-center justify-center myfont-regular text-[1rem]">
          Monitize Your Space, Maximize Your Earnings
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1rem] pt-[3rem]">
          {HostMenuCardContent.map((item, index) => (
            <AdvertisersCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
              additionalCss={index === 0 ? "lg:col-start-2" : ''}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center mt-[4rem]">
        <div className="w-full flex flex-row items-center justify-center myfont-bold text-[2rem]">
          Our Dedicated Hosts Network
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center justify-center gap-6 mt-[2rem]">
          <img src={host1} alt="host1" className="w-[4rem] lg:w-[2rem] mx-auto" />
          <img src={host2} alt="host2" className="w-[10rem] lg:w-[6rem] mx-auto" />
          <img src={host3} alt="host3" className="w-[10rem] lg:w-[6rem] mx-auto" />
          <img src={host4} alt="host4" className="w-[8rem] lg:w-[4rem] mx-auto" />
          <img src={host5} alt="host5" className="w-[10rem] lg:w-[6rem] mx-auto" />
          <img src={host6} alt="host6" className="w-[10rem] lg:w-[6rem] mx-auto" />
          <img src={host7} alt="host7" className="w-[15rem] lg:w-[6rem] mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;