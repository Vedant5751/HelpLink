import React from "react";

export default function About() {
  return (
    <div id="about">
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 border-b border-gray-300">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Welcome to HelpLink
            </h2>
            <p class="mb-4">
              HelpLink is your all-in-one solution for managing volunteer
              activities and projects. We provide innovative tools and resources
              to help non-profit organizations streamline their volunteer
              management processes.
            </p>
            <p>
              Our team of dedicated professionals is committed to supporting
              your organization's mission by empowering volunteers and
              coordinators alike. With HelpLink, you can focus on making a
              positive impact in your community while we handle the rest.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
