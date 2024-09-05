import { useEffect, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const InputBar = ({
  label, type, placeholder, icon, rightSideLabel,
  value, setValue, setOnClickSideIcon, isErrored,
  isDropdown, dropDownData, setDropdownValue, dropdownValue,
  additionalInputCss, usedFor,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (type === 'password') {
      if (showPassword) {
        setInputType('text');
      } else {
        setInputType('password');
      }
    } else {
      setInputType(type);
    }
  }, [showPassword]);

  const toggleDropdown = () => {
    if (isDropdown) {
      setDropdownVisible(!isDropdownVisible);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      <div className="w-full flex justify-between items-center text-sm">
        <div>
          <span className={usedFor === 'profile' ? "" : "myfont-bold"}>
            {label}
          </span>
          {' '}
          {usedFor !== 'profile' && (<span className="text-red-500 ml-1">*</span>)}
        </div>
        {rightSideLabel && (
          <span className="text-xs text-indigo-500 cursor-pointer myfont-bold">
            {rightSideLabel}
          </span>
        )}
      </div>
      <div className="w-full relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full border rounded-lg ${isErrored ? 'border-red-500 text-red-500' : 'border-slate-300'} mt-[0.5rem] p-3 text-xs ${icon ? 'pl-[2.5rem]' : ''} ${additionalInputCss ?? ''}`}
          placeholder={placeholder}
          onClick={toggleDropdown}
        />
        {icon && (
          <div className={`absolute left-2 top-1/2 transform -translate-y-1/3 border rounded-full shadow p-1 ${isErrored ? '!border-red-500 !text-red-500' : 'text-slate-600'}`}>
            {icon}
          </div>
        )}
        {type === 'password' && (
          <div className="absolute right-2 top-1/2 transform -translate-y-[20%]">
            <span className={`text-xs ${isErrored ? '!text-red-500' : 'text-slate-400'} cursor-pointer myfont-bold`}>
              {!showPassword ? (
                <FaRegEye onClick={() => setShowPassword(true)} size={15} />
              ) : (
                <FaRegEyeSlash onClick={() => setShowPassword(false)} size={15} />
              )}
            </span>
          </div>
        )}
        {label === 'Contact Number' && (
          <div onClick={setOnClickSideIcon} className="absolute right-2 top-1/2 transform -translate-y-[38%]">
            <span className="text-xs text-white cursor-pointer p-2 rounded-lg bg-gradient-to-r from-pink-400 to-indigo-500">
              Verify
            </span>
          </div>
        )}
        {isDropdown === true && (
          <div onClick={toggleDropdown} className="absolute right-2 top-1/2 transform -translate-y-[38%]">
            <span className="text-white cursor-pointer p-1 flex rounded-full bg-black">
              <MdKeyboardArrowDown className="text-white" size={18} />
            </span>
          </div>
        )}
        {isDropdownVisible && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white p-5 border border-gray-300 rounded-xl shadow-lg">
            <div className="flex items-center justify-between w-full text-sm">
              <div className="flex flex-col items-start justify-center">
                <div className="myfont-bold">
                  Host Platform
                </div>
                <div className="text-slate-500">
                  <span>
                    Available Host Platform in:
                  </span>
                  {' '}
                  <span className="myfont-bold">
                    Honkong
                  </span>
                </div>
              </div>
              <div>
                <div className="p-1 rounded-full shadow flex flex-row items-center border border-slate-400">
                  <span className="text-xs text-slate-500 cursor-pointer truncate">
                    Filter By:
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
            <ul className="mt-[1rem] max-h-[300px] overflow-y-scroll">
              {dropDownData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (dropdownValue.includes(item.name)) {
                      setDropdownValue(dropdownValue.filter((value) => value !== item.name));
                    } else {
                      setDropdownValue([...dropdownValue, item.name]);
                    }
                  }}
                  className="p-2 hover:bg-indigo-100 cursor-pointer flex items-center rounded-lg justify-between bg-indigo-50 my-[0.5rem]">
                  <div className="text-sm text-slate-700">
                    {item.name}
                  </div>
                  <div>
                    <input checked={dropdownValue.includes(item.name)} type="checkbox" className="mr-2" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputBar;