<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app

      class="teal darken-1"
    >
      <v-layout
        fill-height
        column
        ma-0
      >
        <h2
          v-scroll-to="'#home'"
          class="text-xs-center"
          style="font-size: 34px; margin-top: 20px;margin-bottom: 50px; border-bottom: 1px solid #ccc; padding-bottom: 10px; color: #eee"
        >
          2020 ARI Summit
        </h2>

        <div
          v-for="page in pages"
          :key="page.attributes.title"
          class="text-xs-center"
          @click="checkSidebar"
        >
          <div
            :id="'sidebar-' + page.attributes.id"
            class="mb-4 sidebar pr-3 pl-3"
          >
            <div
              v-if="page.attributes.id === 'home'"
              v-scroll-to="'#home'"
              class="active"
            >
              Home
            </div>
            <div
              v-else
              v-scroll-to="'#' + page.attributes.id"
            >
              {{ page.attributes.title }}
            </div>
          </div>
        </div>
        <v-spacer />
        <v-divider />
        <div class="text-xs-center mb-3 px-3 pt-4 hover">
          <img
            :src="require('@/assets/img/logo-white.png')"
            class="logo"
            height="40"
            @click="goto('http://www.icjia.state.il.us')"
          >
          <h5
            style="color: #fff"
            class="mt-2"
          >
            &copy;&nbsp;2019
            <a
              class="sidebar-info"
              href="http://www.icjia.state.il.us"
            >Illinois Criminal Justice Information Authority</a>
          </h5>
          <h5
            class="pt-3"
            style="font-weight: 400"
          >
            <a
              href="https://github.com/ICJIA/nuxt-ari-summit-2020"
              class="sidebar-info"
            >View on Github</a>
          </h5>
        </div>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'

import pages from '@/manifest.json'
export default {
  data() {
    return {
      drawer: null,
      clipped: false,
      pages
    }
  },
  computed: {
    isXs() {
      return this.$vuetify.breakpoint.xs
    },
    isSm() {
      return this.$vuetify.breakpoint.sm
    },
    sideBarId() {
      return 'sidebar-'
    }
  },
  mounted() {
    if (this.isXs || this.isSm) {
      this.drawer = false
    } else {
      this.drawer = true
    }

    EventBus.$on('toggleSidebar', () => {
      this.drawer = !this.drawer
    })
    EventBus.$on('setSidebar', value => {
      this.drawer = value
    })
  },
  methods: {
    checkSidebar() {
      if (this.isXs || this.isSm) {
        EventBus.$emit('setSidebar', false)
      }
    },
    goto(url) {
      location.href = url
    }
  }
}
</script>

<style scoped>
.sidebar {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
}
.sidebar:hover {
  cursor: pointer;
  color: #bbb;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 700;
  font-style: normal;
}

.active {
  color: #42d5c6 !important;
}

.sidebar-info {
  color: #ffff;
  text-decoration: none;
  font-weight: 700;
}
.logo:hover {
  cursor: pointer;
}
.sidebar-info:hover {
  color: #aaa;
  cursor: pointer !important;
}
</style>
