<template>
  <BasePage>
    <div class="isolate w-full pt-[10rem]">
      <div class="flex flex-col mx-[5%] space-y-[2rem]">
        <h2 class="text-center font-bold tracking-tight text-[2rem]">
          Our Team !
        </h2>
        <!-- Coaches -->
        <div>
          <div class="text-center font-bold text-[1.5rem]">Coaches</div>
          <div class="flex justify-center items-center space-x-5">
            <div
              v-for="(player, index) in displayedCoaches"
              :key="index"
              class="flex flex-col w-[1/3] border rounded-lg shadow-lg h-[15rem]"
            >
              <img
                :src="player.picture"
                :alt="player.name"
                class="h-full w-full"
              />
              <div class="font-bold text-center border bg-white">{{ player.name }}</div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mt-[2rem]">
              <button @click="loadItems('coaches', -1)" v-if="showPreviousCoachesButton">
                <img :src="chevron_left" class="h-[16px] w-[16px]" />
              </button>
              <button @click="loadItems('coaches', 1)" v-if="showLoadCoachesButton">
                <img :src="chevron_right" class="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>
        </div>
        <!-- Goal Keepers -->
        <div>
          <div class="text-center font-bold text-[1.5rem]">Goalkeepers</div>
          <div class="flex justify-center items-center space-x-5">
            <div
              v-for="(player, index) in displayedGoalkeepers"
              :key="index"
              class="flex flex-col w-[1/3] border rounded-lg shadow-lg h-[15rem]"
            >
              <img
                :src="player.picture"
                :alt="player.name"
                class="h-full w-full"
              />
              <div class="font-bold text-center border bg-white">{{ player.name }}</div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mt-[2rem]"> 
              <button @click="loadItems('goalkeepers', -1)" v-if="showPreviousButton">
                <img :src="chevron_left" class="h-[16px] w-[16px]" />
              </button>
              <button @click="loadItems('goalkeepers', 1)" v-if="showLoadButton">
                <img :src="chevron_right" class="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>
        </div>

        <!-- Defense players -->
        <div>
          <div class="text-center font-bold text-[1.5rem]">Defenders</div>
          <div class="flex justify-center items-center space-x-5">
            <div
              v-for="(player, index) in displayedDefensePlayers"
              :key="index"
              class="flex flex-col w-[1/3] border rounded-lg shadow-lg h-[15rem]"
            >
              <img
                :src="player.picture"
                :alt="player.name"
                class="h-full w-full"
              />
              <div class="font-bold text-center border bg-white">{{ player.name }}</div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mt-[2rem]">
              <button @click="loadItems('defense', -1)" v-if="showPreviousDefenseButton">
                <img :src="chevron_left" class="h-[16px] w-[16px]"/>
              </button>
              <button @click="loadItems('defense', 1)" v-if="showLoadDefenseButton">
                <img :src="chevron_right" class="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>
        </div>

        <!-- MidField players -->
        <div>
          <div class="text-center font-bold text-[1.5rem]">Midfielders</div>
          <div class="flex justify-center items-center space-x-5">
            <div
              v-for="(player, index) in displayedMidFieldPlayers"
              :key="index"
              class="flex flex-col w-[1/3] border rounded-lg shadow-lg h-[15rem]"
            >
              <img
                :src="player.picture"
                :alt="player.name"
                class="h-full w-full"
              />
              <div class="font-bold text-center border bg-white">{{ player.name }}</div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mt-[1rem]">
              <button @click="loadItems('midfield', -1)" v-if="showPreviousMidFieldButton">
                <img :src="chevron_left" class="h-[16px] w-[16px]" />
              </button>
              <button @click="loadItems('midfield', 1)" v-if="showLoadMidFieldButton">
                <img :src="chevron_right" class="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>
        </div>

        <!-- Strickers players -->
        <div>
          <div class="text-center font-bold text-[1.5rem]">Strikers</div>
          <div class="flex justify-center items-center space-x-5">
            <div
              v-for="(player, index) in displayedStrickers"
              :key="index"
              class="flex flex-col w-[1/3] border rounded-lg shadow-lg h-[15rem]"
            >
              <img
                :src="player.picture"
                :alt="player.name"
                class="h-full w-full"
              />
              <div class="font-bold text-center border bg-white">{{ player.name }}</div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="mt-[2rem]">
              <button @click="loadItems('strickers', -1)" v-if="showPreviousStrickersButton">
                <img :src="chevron_left" class="h-[16px] w-[16px]" />
              </button>
              <button @click="loadItems('strickers', 1)" v-if="showLoadStrickersButton">
                <img :src="chevron_right" class="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BasePage>
</template>

<script setup>
import { ref, computed } from "vue";
import felix_landry_picture from "../assets/felix_landry.jpg";
import salim_picture from "../assets/salim.jpg";
import yousof_sangar_picture from "../assets/yousof_sangar.jpg";
import mohamed_ounajar_picture from "../assets/mohamed_ounajar.jpg";
import mohamed_badri_picture from "../assets/mohamed_badri.jpg";
import malek_elmutfi_picture from "../assets/malek_elmutfi.jpg";
import charif_picture from "../assets/charif.jpg";
import bachir_picture from "../assets/bachir.jpg";
import samy_douag_picture from "../assets/samy_douag.jpg";
import ilyes_raiq_picture from "../assets/ilyes_raiq.jpg";
import aymen_abkari_picture from "../assets/aymen_abkari.jpg";
import nawfal_chbada_picture from "../assets/nawfal_chbada.jpg";

import chevron_right from "../assets/chevron_right.png";
import chevron_left from "../assets/chevron_left.png";
import BasePage from "./BasePage.vue";

const goalkeaperPlayers = {
  players: [
    { name: "Landry Félix", picture: felix_landry_picture },
    // Add more goalkeeper players as needed
  ],
  paging: {
    page_number: 0
  }
};

const defensePlayers = [
  { name: "Mohamed Ounajar", picture: mohamed_ounajar_picture },
  { name: "Salim El Rhilani", picture: salim_picture },
  { name: "Yousof Sangar", picture: yousof_sangar_picture },
  { name: "Malek El Mutfi", picture: malek_elmutfi_picture },
  { name: "Mohamed Badri", picture: mohamed_badri_picture },
  { name: "Samy Douag", picture: samy_douag_picture },
  // Add more defense players as needed
];

const midfieldPlayers = [
  { name: "Charif El Rhilani", picture: charif_picture },
  // { name: "Yamar Faye", picture: salim_picture },
  { name: "Ilyes Raiq", picture: ilyes_raiq_picture },
  // { name: "Johnny Hovsepian", picture: malek_elmutfi_picture },
  // Add more defense players as needed
];

const strickersPlayers = [
  { name: "Bachir Hovsepian", picture: bachir_picture },
  { name: "Nawfal Chbada", picture: nawfal_chbada_picture },
  // { name: "Ilyes Raiq", picture: ilyes_raiq_picture },
  // { name: "Johnny Hovsepian", picture: malek_elmutfi_picture },
  // Add more defense players as needed
];

const coachesPlayers = [
  { name: "Aymen Abkari", picture: aymen_abkari_picture },
  // Add more defense players as needed
];


const itemsToShow = 2;
const currentPage = ref(0);
const currentDefensePage = ref(0);
const currentMidFieldPage = ref(0);
const currentCoachesPage = ref(0);
const currentStrickers = ref(0);

const displayedDefensePlayers = computed(() => {
  const startIndex = currentDefensePage.value * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  return defensePlayers.slice(startIndex, endIndex);
});

const displayedGoalkeepers = computed(() => {
  const startIndex = currentPage.value * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  return goalkeaperPlayers.players.slice(startIndex, endIndex);
});

const displayedMidFieldPlayers = computed(() => {
  const startIndex = currentMidFieldPage.value * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  return midfieldPlayers.slice(startIndex, endIndex);
});

const displayedStrickers = computed(() => {
  const startIndex = currentMidFieldPage.value * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  return strickersPlayers.slice(startIndex, endIndex);
});

const displayedCoaches = computed(() => {
  const startIndex = currentCoachesPage.value * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  return coachesPlayers.slice(startIndex, endIndex);
});

const showLoadButton = computed(() =>
  currentPage.value < Math.ceil(goalkeaperPlayers.players.length / itemsToShow) - 1
);

const showLoadDefenseButton = computed(() =>
  currentDefensePage.value < Math.ceil(defensePlayers.length / itemsToShow) - 1
);



const showPreviousButton = computed(() => currentPage.value > 0);

const showPreviousDefenseButton = computed(() => currentDefensePage.value > 0);


const showLoadMidFieldButton = computed(() =>
  currentMidFieldPage.value < Math.ceil(midfieldPlayers.length / itemsToShow) - 1
);

const showPreviousMidFieldButton = computed(() => currentMidFieldPage.value > 0);

const showLoadCoachesButton = computed(() =>
  currentCoachesPage.value < Math.ceil(coachesPlayers.length / itemsToShow) - 1
);

const showPreviousCoachesButton = computed(() => currentCoachesPage.value > 0);

const showLoadStrickersButton = computed(() =>
  currentStrickers.value < Math.ceil(strickersPlayers.length / itemsToShow) - 1
);

const showPreviousStrickersButton = computed(() => currentStrickers.value > 0);

const loadItems = (category, direction) => {
  if (category === 'goalkeepers') {
    currentPage.value += direction;
  } else if (category === 'defense') {
    currentDefensePage.value += direction;
  }
  else if (category === 'midfield') {
    currentMidFieldPage.value += direction;
  }
  else if (category === 'strickers') {
    currentStrickers.value += direction;
  }
  else if (category === 'coaches') {
    currentCoachesPage.value += direction;
  }
};
</script>
