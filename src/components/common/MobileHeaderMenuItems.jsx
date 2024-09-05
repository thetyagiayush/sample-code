import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileHeaderMenuItems = ({ name, dropDownMenu }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [onMenu, setOnMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`flex flex-row items-center text-lg px-[1rem] hover:text-black text-slate-600 cursor-pointer`}
      >
        {name}
        {showMenu ? <MdKeyboardArrowUp size={22} /> : <MdKeyboardArrowDown size={22} />}
      </div>
      {(showMenu || onMenu) && dropDownMenu && (
        <div
          className="bg-transparent w-full z-[100]"
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left - 50}px` }}
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className=" px-3 py-1">
            {dropDownMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="w-full py-2 px-2 text-sm text-slate-600 cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white"
                style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeaderMenuItems;
