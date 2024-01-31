<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              :src="ultrafc_logo"
              alt="ultras fc logo"
              class="h-8 w-auto rounded-lg"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          > -->
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                :src="ultrafc_logo"
                alt="ultras fc logo"
                class="h-8 w-auto rounded-lg"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hidden"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="sm:mb-8 sm:flex sm:justify-center">
          <div
            class="hidden relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our next round of funding.
            <a href="#" class="font-semibold text-indigo-600"
              ><span class="absolute inset-0" aria-hidden="true" />Read more
              <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Welcome to the ULTRAS FC Football Club!
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            We are delighted with you welcome into our family dedicated to
            high-level football.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6 hidden">
            <a
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Get started</a
            >
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
              >Learn more <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto">
      <div class="w-full">
        <h2 class="text-base font-semibold leading-7 text-black text-center">
          About Us
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
        >
          Our History
        </p>
        <p class="mx-[5rem] mt-6 text-lg leading-8 text-gray-600 text-center">
          The Ultras FC team had remarkable seasons in 2022 and 2023,
          demonstrating his skill and determination on different terrains and in
          different leagues.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-center"
        >
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] xl:flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Summer 2022 - QSL League Quarter-Final at Terrain Catalogna,
              Lachine (7vs7)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              Ultras FC shined during the QSL League summer tournament. In a
              very tournament competitive at the Catalogna field in Lachine, the
              team reached the quarter-finals. They showed their skill and
              cohesion by winning tense matches against formidable opponents,
              thus reaching the final stages of the tournament. (Player of the
              season Thierry NDIMIS).
            </dd>
          </div>
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Winter 2022 - Stringer League Finalist at Concordia Dome (7vs7)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The winter season was also successful for us Ultras FC. We have
              reached the Stringer League final at the Concordia Dome. In an
              intense match and well fought, we showed our tenacity, but
              unfortunately, we We had to settle for second place. However, this
              experience strengthened our determination to succeed in future
              tournaments. (Player of the tournament Nassim ZAHIRI)
            </dd>
          </div>
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Summer 2023 - Premiership league champion at Molson McGill Field
              (11 vs 11)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The following summer, we redoubled our efforts and won first place
              to the prestigious Premiership Trophy. Playing at Molson McGill
              Stadium in an 11 vs 11 format, the team showed its tactical
              maturity, coordination and his exceptional team spirit. We won the
              championship convincing way, thus proving that we are among the
              best teams from the Greater Montreal region.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- Our vision  -->
  <div
    class="flex xl:block justify-center relative overflow-hidden bg-white w-full"
  >
    <div class="pt-16 w-full">
      <div class="relative">
        <div class="w-[50%] mx-auto">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center"
          >
            Our Vision
          </h1>
          <div class="mt-4 text-lg text-gray-500 text-center">
            The team made up of ambitious young players constitutes the real
            driving force of our club.
          </div>
        </div>
        <div class="flex justify-center mt-[2rem]">
          <img
            :src="ultrafc_logo"
            alt="Ultra FC Premiership Win"
            class="h-[10rem] rounded-xl"
          />
        </div>
        <div class="w-full hidden">
          <div class="mt-10 w-full">
            <!-- Decorative image grid -->
            <div
              aria-hidden="true"
              class="pointer-events-none hidden xl:hidden lg:inset-y-0"
            >
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div
                      class="h-[10rem] w-[12rem] overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                    >
                      <img
                        :src="yossof_home"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                    <div class="h-[10rem] w-[12rem] overflow-hidden rounded-lg">
                      <img
                        :src="bachir_home"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div class="h-[10rem] w-[12rem] rounded-lg">
                      <img
                        :src="ilyes_raiq_picture"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                    <div class="h-[10rem] w-[12rem] overflow-hidden rounded-lg">
                      <img
                        :src="genaro_home"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                    <div class="h-[10rem] w-[12rem] overflow-hidden rounded-lg">
                      <img
                        :src="aymen_abkari_picture"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <div class="h-[10rem] w-[12rem] overflow-hidden rounded-lg">
                      <img
                        :src="simon_bauvais_home"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                    <div class="h-[10rem] w-[12rem] overflow-hidden rounded-lg">
                      <img
                        :src="felix_lundry_home"
                        alt=""
                        class="h-[10rem] w-[12rem] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex flex-col xl:flex-row xl:justify-center xl:items-center text-center mt-[2rem]"
            >
              <!-- Section Block -->
              <div
                class="flex flex-col w-[20rem] mx-auto items-center mt-4 border rounded-xl shadow-xl p-5"
              >
                <div class="flex mt-4 text-lg text-black font-bold">
                  We believe in their potential to grow.
                </div>
                <div class="flex mt-4 overflow-hidden rounded-lg">
                  <img
                    :src="aymen_abkari_picture"
                    alt=""
                    class="h-[10rem] w-[12rem] rounded-lg"
                  />
                </div>
              </div>
              <!-- Section Block -->
              <div
                class="flex flex-col w-[20rem] mx-auto items-center mt-4 border rounded-xl shadow-xl p-5"
              >
                <div class="flex mt-4 text-lg text-black font-bold">
                  We believe in their desire to achieve greatness.
                </div>
                <div class="flex mt-4 overflow-hidden rounded-lg">
                  <img
                    :src="simon_bauvais_home"
                    alt=""
                    class="h-[10rem] w-[12rem] rounded-lg"
                  />
                </div>
              </div>
              <!-- Section Block -->
              <div
                class="flex flex-col w-[20rem] mx-auto items-center mt-4 border rounded-xl shadow-xl p-5"
              >
                <div class="flex mt-4 text-black font-bold">
                  They are the builders of our sporting heritage.
                </div>
                <div class="mt-4 overflow-hidden rounded-lg">
                  <img
                    :src="genaro_home"
                    alt=""
                    class="h-[10rem] w-[12rem] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto">
      <div class="w-full">
        <h2 class="text-base font-semibold leading-7 text-black text-center">
          About Us
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
        >
          Our Gallery
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl hidden">
        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-center"
        >
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] xl:flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Summer 2022 - QSL League Quarter-Final at Terrain Catalogna,
              Lachine (7vs7)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              Ultras FC shined during the QSL League summer tournament. In a
              very tournament competitive at the Catalogna field in Lachine, the
              team reached the quarter-finals. They showed their skill and
              cohesion by winning tense matches against formidable opponents,
              thus reaching the final stages of the tournament. (Player of the
              season Thierry NDIMIS).
            </dd>
          </div>
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Winter 2022 - Stringer League Finalist at Concordia Dome (7vs7)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The winter season was also successful for us Ultras FC. We have
              reached the Stringer League final at the Concordia Dome. In an
              intense match and well fought, we showed our tenacity, but
              unfortunately, we We had to settle for second place. However, this
              experience strengthened our determination to succeed in future
              tournaments. (Player of the tournament Nassim ZAHIRI)
            </dd>
          </div>
          <div class="relative mx-[2rem]">
            <div
              class="mx-auto xl:absolute xl:top-0 xl:left-[-2.5rem] flex h-10 w-10 items-center justify-center rounded-lg bg-white"
            >
              <img :src="soccer_ball_icon" alt="soccer" />
            </div>
            <dt class="text-base font-semibold leading-7 text-gray-900">
              Summer 2023 - Premiership league champion at Molson McGill Field
              (11 vs 11)
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              The following summer, we redoubled our efforts and won first place
              to the prestigious Premiership Trophy. Playing at Molson McGill
              Stadium in an 11 vs 11 format, the team showed its tactical
              maturity, coordination and his exceptional team spirit. We won the
              championship convincing way, thus proving that we are among the
              best teams from the Greater Montreal region.
            </dd>
          </div>
        </dl>
      </div>  
      <div class="flex flex-col justify-center mt-[5rem] mx-auto">
        <div class="my-4 mx-auto">
          <button @click="goBack" :disabled="currentPage === 1">
          <img :src="chevron_left" class="h-[16px] w-[16px]" />
          </button>
          <button @click="goNext" :disabled="currentPage === totalPages">
            <img :src="chevron_right" class="h-[16px] w-[16px]" />
          </button>
        </div>
        <div class="flex justify-center mx-auto">
      <div v-if="visibleImages" v-for="(image, index) in visibleImages" :key="index" class="w-1/3 px-2">
        <img :src="image" alt="Image" class="h-[25rem] sm:w-[10rem] md:w-[20rem] object-cover rounded-lg" />
      </div>
    </div>
  </div>
        
    </div>
  </div>

  <!-- Footer  -->
  <div
    class="mt-[4rem] relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 text-center"
      >
        <div class="max-w-xl lg:max-w-lg hidden">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Subscribe to our newsletter.
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
          <div class="mt-6 flex max-w-md gap-x-4 hidden">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div class="max-w-xl lg:max-w-lg">
          <p class="mt-4 text-lg leading-8 text-gray-300 font-bold">
            © 2023 Ultras FC. All Rights Reserved.
          </p>
          <div class="mt-6 flex max-w-md gap-x-4 hidden">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>

        <dl
          class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 hidden"
        >
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd class="mt-2 leading-7 text-gray-400">
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">No spam</dt>
            <dd class="mt-2 leading-7 text-gray-400">
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div
      class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import BasePage from "./BasePage.vue";
import ultrafc_premiership_win from "../assets/ultra_fc_premiership_win.jpg";
import soccer_ball_icon from "../assets/soccer_ball-30x30.png";
import felix_lundry_home from "../assets/felix_lundry2.jpg";
import genaro_home from "../assets/genaro.jpg";
import bachir_home from "../assets/bachir2.jpg";
import simon_bauvais_home from "../assets/simon_bauvais_home.jpg";
import yossof_home from "../assets/yossof_home.jpg";
import samy_douag_picture from "../assets/samy_douag.jpg";
import ilyes_raiq_picture from "../assets/ilyes_raiq.jpg";
import aymen_abkari_picture from "../assets/aymen_abkari.jpg";
import ultrafc_logo from "../assets/ultrafc_logo_bg_black.jpg";
import ultrafc_logo_nav from "../assets/ultrafc_logo.png";
import chevron_right from "../assets/chevron_right.png";
import chevron_left from "../assets/chevron_left.png";
// import * as trainingPictures from "../assets/training/";

const currentPage = ref(1);

const images = ref([]);
const itemsPerPage = 3;
const totalPages = ref();


onMounted(async () => {
  // Use dynamic import to import images from the folder
  const imagePaths = await importAllImages(require.context('../assets/training', false, /\.(png|jpe?g|gif|svg)$/));

  // Set the imported image paths to the images ref
  images.value = imagePaths;
  visibleImages.value = getVisibleImages()
  totalPages.value = Math.ceil(images.value.length / itemsPerPage)
});

const importAllImages = (r) => {
  return r.keys().map(r);
};

const goNext = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goBack = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const getVisibleImages = () => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  console.log(images.value)
  return images.value.slice(startIndex, endIndex);
};

const visibleImages = ref();

watch(currentPage, () => {
  visibleImages.value = getVisibleImages();
});

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

const mobileMenuOpen = ref(false);




</script>
