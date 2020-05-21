<template>
  <div>
    <sidebar-icon />

    <base-page 
      v-for="(page, index) in pages" 
      :key="index" 
      :page="page" />
  </div>
</template>

<script>
import BasePage from '@/components/BasePage'
import SidebarIcon from '@/components/SidebarIcon'
import pages from '@/manifest.json'

export default {
  components: {
    BasePage,
    SidebarIcon
  },
  data() {
    return {
      pages
    }
  },
  mounted() {
    // console.log('publicPath: ', this.$appConfig.publicPath)
    // if (process.env.NODE_ENV !== 'development') {
    //   var links = [].slice.call(document.getElementsByClassName('download'))
    //   links.forEach(link => {
    //     let filename = link.href.substring(link.href.lastIndexOf('/') + 1)
    //     link.href = `${this.$appConfig.publicPath}/${filename}`
    //   })
    // }
  },
  methods: {}
}
</script>

<style>
.full-width {
  margin: 0;
  padding: 0;
}
a {
  font-weight: bold;
  color: #00796b;
}
</style>
