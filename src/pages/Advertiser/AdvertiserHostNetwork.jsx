import { MdKeyboardArrowDown } from "react-icons/md";
import MyMapComponent from "../../components/Home/MyMapComponent";

function AdvertiserHostNetwork() {
  return (
    <div className="mt-[3rem] border border-slate-300 rounded-xl p-[1.5rem] min-h-[80vh]">
      <div className="w-full sm:flex items-center justify-between space-y-4 sm:space-y-0">
        <div className="md:flex gap-4 items-center">
          <div className="text-lg myfont-bold">
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
        <div className="md:flex gap-4 items-center space-y-4 md:space-y-0">
          
        </div>
      </div>
      <div className="w-full text-sm text-slate-500 mt-[1rem]">
        Here is your hosts network overview.
      </div>
      <div className="w-full h-[60vh] mt-[1rem] ">
        <MyMapComponent />
      </div>
    </div>
  );
}

export default AdvertiserHostNetwork;