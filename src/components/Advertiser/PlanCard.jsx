import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import ColouredIconButton from "../common/ColouredIconButton";

function PlanCard({ name, isActive, features, price, dropDownOptions }) {
  const [showMenu, setShowMenu] = useState(false);
  const [onMenu, setOnMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scrollY = window.scrollY;
    setMenuPosition({
      top: rect.bottom + scrollY,
      left: rect.left,
    });
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div className="w-full max-w-[400px] rounded-xl p-[1rem] bg-[#7A66FB1A] relative">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-slate-600">
              {name}
            </div>
            <div className={`text-xs ${isActive ? 'bg-green-500 text-white' : 'bg-slate-200 text-black'} px-2 py-1 rounded-full`}>
              {isActive ? 'Active' : 'Not Active'}
            </div>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full border shadow cursor-pointer bg-black"
          >
            <SlOptionsVertical size={10} className="text-white" />
          </div>
        </div>
        <div className="myfont-bold !text-2xl w-full my-[1rem]">
          {price}
        </div>
        <div className="text-start text-sm text-slate-500 space-y-3">
          {features.length !== 0 && features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span>
                <GoCheckCircleFill className="text-purple-500 mr-1" />
              </span>
              {feature}
            </div>
          ))}
        </div>
        <div className="absolute right-[3%] bottom-[5%]">
          <ColouredIconButton
            text="Upgrade"
            color="bg-[#7A66FB]"
            reversed
            icon={<FaArrowUp className="text-slate-500" size={11} />}
          />
        </div>
      </div>
      {(showMenu || onMenu) && (
        <div
          className="absolute bg-transparent w-[12rem] px-3 py-3 z-[100]"
          style={{ top: `${menuPosition.top - 10}px`, left: `${menuPosition.left - 70}px` }}
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className="rounded-lg bg-white shadow-xl border px-3 py-3">
            {dropDownOptions?.map((option, index) => (
              <div
                key={index}
                onClick={option.onClick}
                className="flex items-center w-full py-2 px-2 text-sm cursor-pointer hover:bg-[#7A66FB] hover:text-white rounded-lg hover:text-white"
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PlanCard;