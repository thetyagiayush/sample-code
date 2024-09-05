import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineFile } from "react-icons/ai";

function FileCard({ index, data, isDefault, handleDelete, handleEdit }) {
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
      <div key={index} className="w-full flex items-center justify-between gap-5 border border-slate-200 rounded-xl p-[1rem] py-[0.5rem] mt-[0.5rem]">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-400">
            <AiOutlineFile size={20} className="text-white" />
          </div>
          <div className="text-sm text-black">
            {data.name}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isDefault === true && (
            <div className="rounded-full p-1 px-2 myfont-bold bg-slate-200 text-[10px] text-slate-500">
              Default
            </div>
          )}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full border shadow cursor-pointer bg-black"
          >
            <SlOptionsVertical size={10} className="text-white" />
          </div>
        </div>
      </div>
      {(showMenu || onMenu) && (
        <div
          className="absolute bg-transparent w-[12rem] px-3 py-3 z-[100]"
          style={{ top: `${menuPosition.top - 5}px`, left: `${menuPosition.left - 50}px` }}
          onMouseEnter={() => setOnMenu(true)}
          onMouseLeave={() => setOnMenu(false)}
        >
          <div className="rounded-lg bg-white shadow-xl border px-3 py-3">
            <div
              onClick={() => { setShowMenu(false); setOnMenu(false); handleEdit();} }
              className="flex items-center w-full py-2 px-2 text-sm text-black cursor-pointer hover:text-white hover:bg-[#7A66FB] rounded-lg hover:text-white"
            >
              Edit File
            </div>
            <div
              onClick={() => { setShowMenu(false); setOnMenu(false); handleDelete();} }
              className="flex items-center w-full py-2 px-2 text-sm text-black cursor-pointer hover:text-white hover:bg-[#7A66FB] rounded-lg hover:text-white"
            >
              Delete File
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FileCard;