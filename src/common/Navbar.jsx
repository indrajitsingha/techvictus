import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" min-h-[8vh] shadow-sm ">
      <div className="antialiased   ">
        <div className="w-full text-gray-700 bg-[#693268]  ">
          <div className="flex  flex-col max-w-screen-[100%] px-2  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 ">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                <img src="./techvictus-logo.png" className=" h-[50px]" alt="" />
                {/* <strong className=" bg-[black] p-2 text-white"> Techvictus</strong> */}
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                menuOpen ? "flex" : "hidden"
              } flex-col  flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row`}
            >
              <a
                to="/"
                className="px-2 py-2 text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600  dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Home
              </a>
              <a
                to="/product"
                className="px-2 py-2 text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                About
              </a>
              
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex flex-row items-center  w-full px-4 py-2 mt-2 text-[16px] font-semibold text-left  text-white rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white  md:w-auto md:inline md:mt-0 md:ml-4  focus:outline-none focus:shadow-outline"
                >
                  <a onClick={() => setOpen(false)} to="/service">
                    {" "}
                    <span>Courses</span>
                  </a>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4  ml-1 transition-transform duration-200 transform ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {open && (
                  <div
                    className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-[250px]"
                    style={{
                      transformOrigin: "top right",
                      zIndex: 30, // Set a higher z-index to make sure the dropdown appears above other content
                    }}
                  >
                    <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                        Faculty Development Program
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                        Information Tech Courses
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                        Non Information tech Courses
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                        Engineering Drawing Courses
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                      School Courses (II-X)
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                      CUET Courses
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                      Short Term Courses
                      </a> 
                       <a onClick={() => setOpen(false)}
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        to="#"
                      >
                     Long Term Courses
                      </a> 
                     

                      {/* Add more menu items */}
                    </div>
                  </div>
                )}
              </div>
              
              <a
                to="/profile"
                className="px-2 py-2 text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Courses
              </a>
              <a
                to="/contact"
                className="px-2 py-2  text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Infrastructure
              </a>
              <a
                to="/contact"
                className="px-2 py-2  text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Partners
              </a>
              <a
                to="/contact"
                className="px-2 py-2  text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Gallery
              </a>
              <a
                to="/contact"
                className="px-2 py-2  text-white mt-2 cursor-pointer text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Contact Us
              </a>
              <a
                to="/login"
                className="px-2 text-white py-2 mt-2 text-md font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-white "
              >
                Chat
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
