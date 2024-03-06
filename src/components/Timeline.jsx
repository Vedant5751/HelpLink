import React from "react";

export default function Timeline() {
  return (
    <div id="Timeline" className="flex justify-center items-center ">
      <div className="border-b border-gray-400 ">
        <h1 className="text-4xl mb-4 text-center font-bold text-gray-900 dark:text-white">
          Timeline
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 15, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Volunteer Orientation Session
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Join us for an orientation session to learn about our
              organization, our mission, and how you can get involved as a
              volunteer.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 22, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Community Clean-up Event
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Join us for a community clean-up event to help keep our streets
              clean and protect the environment.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 5, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fundraising Gala
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Attend our fundraising gala to support our initiatives and help
              make a positive impact in our community.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 20, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Beach Cleanup Drive
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Join us for a beach cleanup drive to preserve our oceans and
              protect marine life.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 10, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tree Planting Event
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Help us plant trees and create a greener environment for
              generations to come.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 25, 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Wildlife Conservation Workshop
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Attend our workshop and learn about wildlife conservation efforts.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
