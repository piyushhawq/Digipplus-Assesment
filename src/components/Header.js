import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const handleClick = (e) => {
    setOpenTab(Number(e.target.id));
    setMenuOpen((prev) => !prev);
    console.log(e.target.id);
  };

  return (
    <div className="primary-shadow-yellow bg-white">
      <header className="flex items-center justify-between h-[70px] max-w-screen-xl mx-auto px-4">
        <div>
          <img src="/public/images/digiplus logo.png" className="w-28" alt="Digiplus" />
        </div>
        {menuOpen ? (
          <XMarkIcon
            onClick={handleClick}
            className="menu-btn absolute z-50 right-[0.7rem] top-4 lg:hidden h-8 text-yellow cursor-pointer"
          />
        ) : (
          <Bars3Icon
            onClick={handleClick}
            className="menu-btn absolute z-50 right-[0.7rem] top-4 lg:hidden h-8 text-yellow cursor-pointer"
          />
        )}
        <nav
          className={
            "my-navbar bg-white absolute z-40 inset-0 lg:inset-auto lg:w-2/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center pt-36 lg:pt-0 transform transition-transform duration-500 ease-in-out " +
            (menuOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <ul className="flex flex-col lg:flex-row lg:items-center text-sm font-medium text-gray-500">
            <li
              className={`py-2 px-4 border-b-2 ${
                openTab === 1
                  ? "text-[#F76247] border-[#F76247]"
                  : "border-transparent"
              }`}
            >
              <Link id="1" onClick={handleClick} to="/">
                HOME
              </Link>
            </li>
            <li
              className={`py-2 px-4 border-b-2 ${
                openTab === 2
                  ? "text-[#F76247] border-[#F76247]"
                  : "border-transparent"
              }`}
            >
              <Link id="2" onClick={handleClick} to="/jobs">
                My Jobs
              </Link>
            </li>
            <li
              className={`py-2 px-4 border-b-2 ${
                openTab === 3
                  ? "text-[#F76247] border-[#F76247]"
                  : "border-transparent"
              }`}
            >
              <Link id="3" onClick={handleClick} to="/payment">
                My Payment
              </Link>
            </li>
            <li
              className={`py-2 px-4 border-b-2 ${
                openTab === 4
                  ? "text-[#F76247] border-[#F76247]"
                  : "border-transparent"
              }`}
            >
              <Link id="4" onClick={handleClick} to="/letter">
                My OfferLetter
              </Link>
            </li>
            <li
              className={`py-2 px-4 border-b-2 ${
                openTab === 5
                  ? "text-[#F76247] border-[#F76247]"
                  : "border-transparent"
              }`}
            >
              <Link id="5" onClick={handleClick} to="/certificate">
                My Certificate
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:inline-block space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-600" />
         
        </div>
      </header>
    </div>
  );
};

export default Header;
