import advLogoWhite from '../../assets/advLogoWhite.png';
import { useNavigate } from 'react-router-dom';

const LeftPortion = () => {
  const naviate = useNavigate();
  return (
    <div className="w-full flex flex-col relative  bg-[#7A66FB] h-full p-[2.5rem] pt-[1.5rem]">
        <div className="flex w-full items-center justify-start">
          <img src={advLogoWhite} onClick={() => naviate('/')} alt="advLogoWhite" className="w-[200px] mt-[2rem] cursor-pointer" />
        </div>
        <div className="flex w-full items-center justify-start mt-[3rem] text-white text-2xl myfont-bold">
          Host
        </div>
        <div className="flex w-full items-center justify-start mt-[1rem] text-white">
          Amplify your revenue by strategically positioning your brand in front of a wider audience through targeted ads delivered by our network of hosts.
        </div>
        <div className="absolute flex w-full items-center justify-end top-[40%] lg:top-[35%] text-white right-[5%] lg:right-[10%]">
          <div className="rounded-xl p-[0.8rem] bg-white w-[13rem] relative">
            <div className="text-xs text-slate-600 border-b border-b-slate-200 pb-[6px]">
              Why With Us?
            </div>
            <div className="mt-[1rem]">
              <div className="rounded-full border border-pink-300 text-black text-xs w-fit !shadow-xl px-6 py-[0.2rem] myfont-bold">
                Easy Money
              </div>
            </div>
            <div className="mt-[0.5rem]">
              <div className="rounded-full border ml-auto border-pink-300 text-black text-xs w-fit !shadow-xl px-6 py-[0.2rem] myfont-bold">
                Be in control
              </div>
            </div>
            <div className="mt-[0.5rem] relative">
              <div className="-translate-x-[3.5rem] bg-white rounded-full border ml-auto border-pink-300 text-black text-xs w-fit !shadow-xl px-6 py-[0.2rem] myfont-bold">
                More ads, more money
              </div>
            </div>
            <div className="mt-[0.5rem] relative">
              <div className="translate-x-[1.5rem] bg-white rounded-full border border-pink-300 text-black text-xs w-fit !shadow-xl px-5 py-[0.2rem] myfont-bold">
                We handle the hard part
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[60%] lg:top-[55%] flex w-full items-center justify-start mt-[3rem] text-white pl-[10%] lg:pl-[10%] !z-[1000]">
          <div className="rounded-xl p-[0.8rem] bg-white w-[9rem] relative">
            <div className="text-xs text-slate-600 border-b border-b-slate-200 pb-[6px]">
              Revenue Sharing
            </div>
            <div className="mt-[1rem] flex items-center gap-2">
              <div className="rounded-lg bg-indigo-500 p-2 text-sm">
                2%
              </div>
              <div className="text-black myfont-bold">
                for Us
              </div>
            </div>
            <div className="mt-[1rem] flex items-center gap-2">
              <div className="rounded-lg bg-indigo-500 p-2 text-sm">
                98%
              </div>
              <div className="text-black myfont-bold">
                for You
              </div>
            </div>
          </div>
        </div>
        <div className="absolute !w-full min-w-[400px] bottom-0 left-0">
          <svg viewBox="0 0 568 353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_381_6780)">
              <path d="M-2 4C78.9106 173.661 237.084 293.541 422.3 325.577L563.5 350H-2V4Z" fill="#D36AC6" fillOpacity="0.25" />
            </g>
            <defs>
              <filter id="filter0_f_381_6780" x="-6" y="0" width="573.5" height="354" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_381_6780" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
  );
};

export default LeftPortion;