import { useNavigate } from "react-router-dom";
import MobileHeaderMenuItems from "./MobileHeaderMenuItems";

function MobileSharedLayoutMenu({ profileDropDown, activeMenu }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-[1rem] flex-col">
        {activeMenu.map((item, index) => (
          <div key={index} onClick={() => navigate(item.link)} className={`w-full py-2 px-[1rem] text-lg ${window.location.pathname.includes(item.link) ? 'text-black' : 'text-slate-600'} cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white`}>
            {item.name}
          </div>
        ))}
      </div>
      <MobileHeaderMenuItems name="Harvey Specter" dropDownMenu={profileDropDown} />
    </>
  );
}

export default MobileSharedLayoutMenu;