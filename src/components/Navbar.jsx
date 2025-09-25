import React from 'react';
import {appleImg, bagImg, searchImg} from "../utils/index.js";
import {navLists} from "../constants/index.js";

const Navbar = () => {
  return (
    <header className="w-full p-5 py-5 px-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center justify-between">
          <img src={appleImg} alt="Apple " width={14} height={18}/>

          <div className="flex gap-6 flex-1 justify-center max-sm:hidden">
              {navLists.map((nav) => (
                  <div key={nav} className="px-5 cursor-pointer text-gray hover:text-white transition-all duration-300 ease-in-outs">{nav}</div>
              ))}

          </div>

              <div className="flex items-center gap-7  ">
                  <img src={searchImg} alt="search" width={18} height={18}/>
                  <img src={bagImg} alt="bag" width={18} height={18}/>
              </div>

      </nav>
    </header>
  );
};

export default Navbar;
