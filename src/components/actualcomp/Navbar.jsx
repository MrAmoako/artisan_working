import React, { useState } from 'react';
import logo from './images/a.png';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="p-5 absolute inset-x-0 top-0 h-8 ">
        <div className="">

          <div
            className="flex items-center lg:flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >

            <a
              className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                src={logo}
                style={{ height: '20px' }}
                alt=""
                loading="lazy"
              />
            </a>

            <button
              onClick={toggleSidebar}
              className="lg:hidden block p-2 rounded-md text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>

            <ul
              className="list-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>

                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="/"
                  data-twe-nav-link-ref
                >
                  Dashboard
                </a>

              </li>

              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="/clientSignup"
                  data-twe-nav-link-ref
                >
                  Services
                </a>
              </li>

              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="/signup"
                  data-twe-nav-link-ref
                >
                  Become an artisan
                </a>
              </li>

            </ul>

          </div>

        </div>
      </nav>
      {/* Responsive sidebar for mobile and tablet screens */}
      <div className={`${isSidebarOpen ? '' : 'hidden'} lg:hidden fixed inset-0 bg-black bg-opacity-25 z-50`} onClick={toggleSidebar}></div>
      <div className={`${isSidebarOpen ? '' : 'hidden'} lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-50`}>
        <div className="p-5">
          <a
            href="#"
            className="flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          >
            <img
              src={logo}
              style={{ height: '20px' }}
              alt=""
              loading="lazy"
              className="mr-2"
            />
            Dashboard
          </a>
          <a
            href="/clientSignup"
            className="block mt-4 text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80"
          >
            Services
          </a>
          <a
            href="/signup"
            className="block mt-4 text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80"
          >
            Become an artisan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
