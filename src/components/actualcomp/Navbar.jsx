import React from 'react'
import logo from  './images/a.png'

function Navbar() {
  return (
<<<<<<< Updated upstream
    <div>
        <nav
  class="p-5 absolute inset-x-0 top-0 h-8  ">
  <div className="">
    
=======
    <div className='bg-blue-200'>
      <nav className="p-5 absolute inset-x-0 top-0 h-8 ">
        <div className="">
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
>>>>>>> Stashed changes

    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-twe-collapse-item>

      <a
        className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="#">
        <img
          src={logo}
          style={{height: '20px'}}
          alt=""
          loading="lazy" />
      </a>

      <ul
        className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
        data-twe-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>

<<<<<<< Updated upstream
=======
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
                  href="/Clientsignup"
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
>>>>>>> Stashed changes
          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="/"
            data-twe-nav-link-ref
            >Dashboard</a
          >
        </li>

        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="/client"
            data-twe-nav-link-ref
            >Services</a
          >
        </li>

        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
          <a
            className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
            href="/signup"
            data-twe-nav-link-ref
            >Become an artisan</a
          >
        </li>
      </ul>
 
    </div>


    
 
  </div>
</nav>
    </div>
  )
}

export default Navbar