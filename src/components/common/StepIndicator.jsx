import { TiTick } from "react-icons/ti";
import '../../pages/SignUp/SignUp.css';

const StepIndicator = ({ step, label, isActive, isCompleted, onClick }) => (
  <div className="flex flex-col items-center space-y-2 relative cursor-pointer">
    <div
      onClick={onClick}
      className={`${isActive
        ? 'bg-gradient-to-r from-pink-400 to-indigo-500 text-white'
        : 'bg-gray-400 text-white'
        } w-[25px] h-[25px] rounded-full flex items-center justify-center text-[12px] font-bold`}
    >
      {isCompleted ? <TiTick className="text-[18px]  flip-in-ver-right" /> : <span>{step}</span>}
    </div>
    <span className="regular text-[#555555] text-[12px] absolute text-center top-[25px]">
      {label}
    </span>
  </div>
);

export default StepIndicator;
