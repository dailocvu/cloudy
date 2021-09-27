import Logo from "../images/c-logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Hero = (props) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 ">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 "
              aria-label="Global"
            >
              <div className="flex items-center flex-1 ">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <button href="#">
                    <img className="h-8 w-auto sm:h-10" src={Logo} alt="logo" />
                  </button>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className=" bg-pink-600 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {props.navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-base text-gray-700 hover:text-gray-800 "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md  bg-white ring-1 ring-pink-600 ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={Logo} alt="logo" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-600 hover:text-gray-200 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {props.navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-pink-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        {/*Hero */}
        <main class="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-48">
          <div class="text-center">
            <h1 class="tracking-tight font-extrabold text-gray-700">
              <p class="text-xl sm:text-3xl md:text-4xl">
                Accelerate your transformation with
              </p>
              <p class="py-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">
                Cloudy Platform
              </p>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Deploy your websites in less than 60 seconds.
            </p>
            <div class="mt-5 max-w-md mx-auto flex justify-center items-center sm:flex sm:justify-center md:mt-8 z-20">
              <a
                class="z-40 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  py-3 border border-transparent text-base rounded-md text-white bg-gray-700 hover:bg-gray-600"
                href="#"
              >
                Get started
              </a>
              <a
                aria-label=""
                class="z-40 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                href="#"
              >
                Learn more
              </a>
            </div>
            <div class="absolute top-24 md:top-36 md:left-50 w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div class="absolute right-0 top-48 md:top-36 md:right-0 w-72 h-72 md:w-96 md:h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div class="absolute bottom-36 left-0 md:bottom-12 md:left-48 w-72 h-72 md:w-96 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
