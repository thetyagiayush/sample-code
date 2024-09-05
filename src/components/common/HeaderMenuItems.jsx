import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderMenuItems = ({ name, dropDownMenu, additionalCss }) => {
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
        className={`flex flex-row items-center hover:text-black text-slate-600 cursor-pointer ${additionalCss ?? ''}`}
      >
        {name}
        <MdKeyboardArrowDown size={22} />
      </div>
      {(showMenu || onMenu) && dropDownMenu && (
        <div
          className="absolute bg-transparent w-fit px-3 py-3 z-[1000]"
          style={{ top: `${menuPosition.top - 5}px`, left: `${menuPosition.left - 50}px` }}
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className="rounded-lg bg-white shadow-lg border px-3 py-3">
            {dropDownMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="w-[10rem] py-2 px-2 text-sm text-slate-600 cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-pink-400 rounded-lg hover:text-white"
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

export default HeaderMenuItems;
