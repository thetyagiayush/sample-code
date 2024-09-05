import { useEffect, useState } from 'react';
import advLogo from '../../assets/advLogoTransparent.png';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../Home/PricingCard';
import MyMapComponent from '../Home/MyMapComponent';
import UploadAdvFile from './UploadAdvFile';

const LeftPortionAdv = ({ id, currPage, type }) => {
  const naviate = useNavigate();
  const [viewBox, setViewBox] = useState('0 0 594 200');
  const [heightVal, setHeightVal] = useState(200);
  const [widthVal, setWidthVal] = useState(594);
  const [file, setFile] = useState(null);

  const PricingCardContent = [
    { name: "Basic", locations: 120, price: 50, monthly: 50, weekly: 15, yearly: 500, features: ["30 days of Ad display", "Upto 5 hosts", "10,000 impressions"] },
    { name: "Standard", locations: 120, price: 100, monthly: 100, weekly: 30, yearly: 1000, features: ["60 days of Ad display", "Upto 10 hosts", "50,000 impressions"] },
    { name: "Premium", locations: 120, price: 200, monthly: 200, weekly: 60, yearly: 2000, features: ["90 days of Ad display", "Unlimited hosts", "100,000 impressions"] },
    { name: "Enterprise", locations: 120, price: "Custom", features: ["All features in Premium Plan", "Dedicated account manager", "Priority customer support", "Exclusive Ad placements"] },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setViewBox('0 0 394 150');
        setHeightVal(150);
        setWidthVal(394);
      } else if (window.innerWidth < 1024 ) {
        setViewBox('0 0 394 150');
        setHeightVal(150);
        setWidthVal(394);
      } else {
        setViewBox('0 0 594 200');
        setHeightVal(200);
        setWidthVal(594);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="w-full flex flex-col relative min-w-[400px] lg:min-w-[594px] h-[100vh] p-[2.5rem] pt-[1.5rem]">
      <div onClick={() => naviate('/')} className="flex w-full items-center justify-start cursor-pointer !z-[100000]">
        <img src={advLogo} alt="advLogoWhite" className="w-[200px] mt-[2rem]" />
      </div>
      {currPage < 3 ? (
      <div className="w-full flex items-center justify-center  my-auto">
        {PricingCardContent.filter((item, index) => index == id).map((item, index) => (
          <PricingCard
            key={index}
            name={item.name}
            current="000"
            locations={item.locations}
            price={type === 'm' ? item.monthly : type === 'w' ? item.weekly : item.yearly}
            features={item.features}
            additionalCss="!scale-110"
            usedFor="signup"
            onButtonClick={() => naviate('/pricing')}
          />
        ))}
      </div>
      ) : (
        <>
          <div className={`z-[10000] mt-[5rem] ${currPage === 4 ? '!h-[350px] my-auto' : '!h-[500px] my-auto'} rounded-xl`}>
            <MyMapComponent />
            {currPage === 4 && (
            <div>
              <UploadAdvFile 
                label="Upload Advertisement File (Optional)"
                showFileName
                uploadedFile={file}
                setUploadedFile={setFile}
                supportedFiles="Supported formats: Xls, PDF, Word, JPG, PNG, SVG | Max Size : 50 MB"
              />
            </div>
          )}
          </div>
          
        </>
      )}
      <div className="absolute !w-fit top-0 right-0">
        <svg width={widthVal} height={heightVal} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M594 200C506.719 99.6217 384.191 36.6357 251.767 24.0735L-2 0H594V200Z" fill="#7A66FB" />
        </svg>
      </div>
      <div className={`absolute !w-[${widthVal}] bottom-0 left-0`}>
        <svg width={widthVal} height={heightVal} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-2 0C85.2814 100.378 207.809 163.364 340.233 175.927L594 200H-2V0Z" fill="#D36AC6" />
        </svg>
      </div>
    </div>
  );
};

export default LeftPortionAdv;