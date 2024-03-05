import React from 'react'
import { Link } from 'react-router-dom'


export default function HomeHero() {
  return (
    <div>
      <section class="relative bg-[url(https://storage.needpix.com/rsynced_images/volunteers-601662_1280.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Take a stand for the environment with{" "}
              <strong class="block font-extrabold text-green-500">
                {" "}
                HelpLink.{" "}
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed">
              Make a difference in your community. Join us in our mission for
              environmental conservation!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link to="/volprofile">
                <a
                  href="#"
                  class="block w-full rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-900 focus:outline-none focus:ring active:bg-gray-900 sm:w-auto"
                >
                  Fill Out Form
                </a>{" "}
              </Link>
              <Link to="/about">
                <a
                  href="#"
                  class="block w-full rounded hover:bg-slate-400 bg-white px-12 py-3 text-sm font-medium text-gray-900 shadow hover:text-gray-900 focus:outline-none focus:ring active:text-gray-900 sm:w-auto"
                >
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
