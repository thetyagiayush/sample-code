import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineIntegrationInstructions } from "react-icons/md";
import { LuHeadphones, LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ProfileDisplay() {
  const navigate = useNavigate();
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
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-4"
      >
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/fec6/3c68/40b708f7affc1e615cb35f8314717735?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhkllyTkeOF9~NYRuhL9yXGoNTBvLIq4Hx2tUq2GR3EOQTdMaiVgy9EyjSbwIgCtP-Nrm1m5QViFYY2FOehOS-d5rPx2V0Z3pzQsurOtgEc8rLOzD9vL1NyvUuih2zo5tf-HcjxigQTsJB3unA8ebR3gf-yfrHt9Z-h2Vt6X7VRm31YNXofvb2ZQ0W31Eg0GlAD5Fh-dreMe0mA6ZgkjviAL6wHblXoH4gCJbedZ3aP--REm~HFeBMD1USZRx7~9YooAPpkZAE53pyd4jBEOSZXnCCf0PT6Im3nnV11y3wXHCa1~a3isXUQInf3wtnzd4ao7MRESzKO~FtgzfvYcBA__" alt="profile" className="w-[40px] h-[40px] rounded-full" />
        </div>
        <div className="w-[10rem] h-[40px] flex flex-col items-start justify-center">
          <div className="myfont-bold text-sm">
            Harvey Specter
          </div>
          <div className="text-xs text-slate-500 truncate w-[10rem]">
            harveyspecterofficial@gmail.com
          </div>
        </div>
        <div className="h-[40px] flex items-center justify-center">
          <div className="p-1 rounded-full border border-slate-200">
            <MdKeyboardArrowDown className="text-slate-500" />
          </div>
        </div>
      </div>
      {(showMenu || onMenu) && (
        <div
          className="absolute bg-transparent w-[18rem] px-3 py-3 z-[100]"
          style={{ top: `${menuPosition.top - 5}px`, left: `${menuPosition.left - 10}px` }}
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className="rounded-lg bg-white shadow-xl border px-3 py-3">
            <div
              onClick={() => navigate('/host/home')}
              className="flex items-center w-full py-2 px-2 text-sm text-slate-600 cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white"
            >
              <LuHeadphones className="mr-2" />
              Support
            </div>
            <div
              onClick={() => navigate('/host/home')}
              className="flex items-center w-full py-2 px-2 text-sm text-slate-600 cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white"
            >
              <MdOutlineIntegrationInstructions className="mr-2" />
              Instructions
            </div>
            <div
              onClick={() => navigate('/host/home')}
              className="flex items-center w-full py-2 px-2 text-sm text-slate-600 cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white"
            >
              <LuLogOut className="mr-2" />
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileDisplay;