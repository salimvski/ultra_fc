<template>
  <div class="bg-white h-screen overflow-hidden">
    <div class="absolute inset-0 h-full w-full brightness-50">
        <img :src="ultrafc_premiership_win" alt="Ultra FC Premiership Win" class="h-full w-full object-cover hidden"  />
    </div>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-center p-6 lg:px-8 bg-black h-[6rem]"
        aria-label="Global"
      >
        <div class="flex">
          <div class="absolute left-0 top-0">
            <img :src="ultrafc_logo" alt="ultras fc logo"  />
        </div>
        </div>
        <div class="flex hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="flex justify-center text-white space-x-6">
          <router-link to="/" class="flex text-sm font-semibold leading-6 text-white">Accueil</router-link>
          <router-link to="/contact" class="flex text-sm font-semibold leading-6 text-white">Contact</router-link>
          <router-link to="/team" class="flex text-sm font-semibold leading-6 text-white">Joueurs</router-link>
        </div>
        <div class="hidden">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
    </header>
    <body class="pt-[10rem]">
      <slot></slot>
    </body>
  </div>
</template>

<script setup>
import ultrafc_premiership_win from "../assets/ultra_fc_premiership_win.jpg";
import ultrafc_logo from "../assets/ultrafc_logo.png";
</script>
