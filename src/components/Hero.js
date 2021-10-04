import Logo from "../images/c-logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Banner from "../images/banner.jpg";
import { Link } from "react-scroll";

const Hero = (props) => {
  return (
    <div className="relative bg-primary overflow-hidden">
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
                    <Popover.Button className="bg-gradient-to-br from-pink-600 to-pink-800  rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
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
                    className="font-medium text-base text-gray-300 hover:text-gray-100 "
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
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
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
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">
                  Accelerate your transformation
                </span>{" "}
                <span className="block text-pink-600 xl:inline">
                  with Cloudy
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Deploy your websites in less than 60 seconds.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="pricing"
                    spy={true}
                    smooth={true}
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-br from-pink-600 to-pink-800 hover:opacity-90 md:py-3 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 sm:h-98 md:h-99 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={Banner}
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
