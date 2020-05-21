<template>
  <v-app>
    
    <sidebar/>
    <v-content>
     
      <nuxt />
      
    </v-content>
   
  </v-app>
</template>

<script>
import config from '@/config'
import Sidebar from '@/components/Sidebar'
import { EventBus } from '@/event-bus.js'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      currentPage: null
    }
  },
  computed: {},
  watch: {
    currentPage(newValue, oldValue) {
      /**
       * If scrolling caused a new page to come into view, fire event to change the color of the sidebar icon.
       */
      EventBus.$emit('pageUpdate', newValue)
    }
  },

  mounted() {
    console.log(this.$browserDetect)
    /**
     * Get all pages in window ...
     */
    let page = document.querySelectorAll('.page')
    let pages = {}
    let p = 0
    let offset = 0
    /**
     * ... determine offset ...
     */
    Array.prototype.forEach.call(page, function(e) {
      pages[e.id] = e.offsetTop
    })
    /**
     * ... listen for scroll and determine what 'page' is in view ...
     */
    window.onscroll = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      for (p in pages) {
        if (pages[p] <= scrollPosition) {
          /**
           * ... then add 'active' class to sidebar link for current section ...
           */
          const el = document.getElementById('sidebar-' + p)
          var els = document.querySelectorAll('.active')
          /**
           * ... and remove .active from all other sections.
           */
          for (var i = 0; i < els.length; i++) {
            els[i].classList.remove('active')
          }
          el.className += ' active'
          this.currentPage = p
        }
      }
    }
  },
  methods: {}
}
</script>
