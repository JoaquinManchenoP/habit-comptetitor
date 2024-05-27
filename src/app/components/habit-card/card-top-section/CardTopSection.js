import React, { useState } from "react";

export default function CardTopSection() {
  const [checkInBox, setCheckInBox] = useState(false);
  const [valueMenu, setValueMenu] = useState(false);

  const handleCheckBoxchange = () => {
    setCheckInBox(!checkInBox);
    if (checkInBox) {
      setValueMenu(false);
    } else {
      setValueMenu(true);
    }
  };

  const handleValueMenu = () => {
    setValueMenu(!valueMenu);
  };

  const handleUserInput = (value) => {
    console.log("value", value);
  };

  return (
    <div className="delete-button">
      <div className="w-[450px] h-[100px] flex mx-3 ">
        <div className="check-in h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[55px] w-[90px] bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked={checkInBox}
                    onChange={handleCheckBoxchange}
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Check-in</span>
            </div>
          </div>
          {valueMenu && (
            <div className="flex-none" onClick={handleValueMenu}>
              <div className="dropdown dropdown-end dropdown-open">
                <ul
                  tabIndex="0"
                  className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-28 mr-5 mt-1"
                >
                  <li onClick={() => handleUserInput(1)}>
                    <a>Started</a>
                  </li>
                  <li onClick={() => handleUserInput(2)}>
                    <a>Halfway</a>
                  </li>
                  <li onClick={() => handleUserInput(3)}>
                    <a>Completed!</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[55px] w-[90px] bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">27</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Streak</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[55px] w-[90px] bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">45%</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Score</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[55px] w-[90px] bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">45%</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Consistency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
