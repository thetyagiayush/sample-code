import { useState } from "react";
import { CiBank } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { MdDeleteOutline } from "react-icons/md";

function BankCard({ index, data, isDefault, handleDelete }) {
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
      <div key={index} className="flex items-center justify-between gap-5 border border-slate-200 rounded-xl p-[1.5rem] mt-[1rem]">
        <div className="flex items-center gap-4">
          <CiBank size={30} className="text-slate-700" />
          <div className="text-sm text-black myfont-bold">
            ****
            {' '}
            {data.accountNumber.slice(-4)}
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
            className="p-2 rounded-full border shadow cursor-pointer"
          >
            <SlOptionsVertical size={10} className="text-slate-500" />
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
              onClick={handleDelete}
              className="flex items-center w-full py-2 px-2 text-sm text-red-500 cursor-pointer hover:bg-gradient-to-r from-indigo-500 hover:text-white to-pink-400 rounded-lg hover:text-white"
            >
              <MdDeleteOutline className="mr-2" />
              Delete Account
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BankCard;