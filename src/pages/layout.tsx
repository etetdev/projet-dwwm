import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-2.5 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RoamR
          </span>
        </Link>
        <div className="flex space-x-2 md:order-4">
          <Link href="/login">
            <button className="px-5 py-2.5 text-center text-sm font-medium text-black dark:text-white">
              Connexion
            </button>
          </Link>
          <Link href="/register">
            <button
              type="button"
              className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            >
              Rejoindre
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white p-4 shadow dark:bg-gray-900 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="mb-4 flex items-center sm:mb-0">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            RoamR
          </span>
        </Link>
        <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              À propos
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        ©
        <Link href="/" className="hover:underline">
          RoamR™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Navbar;
