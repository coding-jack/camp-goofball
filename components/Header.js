import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'


function Header() {
  const [isOn, setIsOn] = useState(false)
  const router = useRouter()
  function removeSpace(prop) {
    return prop.replace(/\s/g, '');
  }

  return (
    // < !--This example requires Tailwind CSS v2.0 + -->
    <header className="fixed w-full z-30 franchise">
        <>
          <div className="bg-black md:bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between lg:justify-center h-16">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a>
                      <Image layout="responsive" height="20px"width="20px" className="h-8 w-8" src="/images/HeroSlider/2-Crowd.jpg" alt="Workflow" />
                    </a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                      <div className="px-3 text-primary text-3xl">
                        <Link href={`#lineup`}>
                          <a>Lineup</a>
                        </Link>
                      </div>
                      <div className="px-3 text-primary text-3xl">
                        <Link href={`#about`}>
                          <a>About</a>
                        </Link>
                      </div>
                      <div className="px-3 text-primary text-3xl">
                        <Link href={`#generalInfo`}>
                          <a>General Info</a>
                        </Link>
                      </div>
                      {/* <div className="px-3 text-primary text-3xl">
                        <Link href={`#location`}>
                          <a>Location</a>
                        </Link>
                      </div> */}
                      <div className="px-3 text-primary text-3xl">
                        <Link href={`#rules-regulations`}>
                          <a>Rules/Regulations</a>
                        </Link>
                      </div>
                      <div className="btn-primary" key="1">
                        <Link href="https://www.eventbrite.com/e/camp-goofball-tickets-320413233607">
                          <a>Tickets</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:opacity-75 hover:bg-purple hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    ariaChecked={isOn}
                    tabIndex="0"
                    onClick={() => setIsOn(!isOn)}
                  // className={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                  >
                    <span
                      className="sr-only"
                    >Open main menu</span>
                    {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                    <svg
                      className={`${isOn ? 'hidden' : 'block'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                    <svg
                      className={`${isOn ? 'block' : 'hidden'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
            <div className={`${isOn ? 'block' : 'hidden'} md:hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                <div className="px-3 text-primary text-3xl">
                  <Link href={`#lineup`}>
                    <a>Lineup</a>
                  </Link>
                </div>
                <div className="px-3 text-primary text-3xl">
                  <Link href={`#about`}>
                    <a className="mx-auto">About</a>
                  </Link>
                </div>
                <div className="px-3 text-primary text-3xl">
                  <Link href={`#generalInfo`}>
                    <a>General Info</a>
                  </Link>
                </div>
                {/* <div className="px-3 text-primary text-3xl">
                  <Link href={`#location`}>
                    <a>Location</a>
                  </Link>
                </div> */}
                <div className="px-3 text-primary text-3xl">
                  <Link href={`#rules-regulations`}>
                    <a>Rules/Regulations</a>
                  </Link>
                </div>
                <div className="btn-primary mobile-menu-button mx-auto" key="1">
                  <Link href="https://www.eventbrite.com/e/camp-goofball-tickets-320413233607">
                    <a>Tickets</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
    </header>
  )
}

export default Header;
