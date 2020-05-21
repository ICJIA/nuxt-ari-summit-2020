/* eslint-disable vue/max-attributes-per-line */
<template>
  <div 
    :id="page.attributes.id" 
    class="page">
    <v-container 
      :style="setPageStyle(page.attributes.theme)" 
      fluid 
      class="full-width full-height">
      <v-layout 
        row 
        pl-5 
        pr-0>
        <v-flex 
          class="text-xs-center" 
          xs10 
          offset-xs1>
          <div class="wrapper">
            <page-content :alignment="page.attributes.alignment">
              <template v-slot:header>
                <div v-if="page.attributes.id === 'home'">
                  <h1 class="mb-5 main">{{ page.attributes.title }}</h1>
                </div>
                <div v-else>
                  <h2 class="header">{{ page.attributes.title }}</h2>
                </div>
              </template>
              <template v-slot:content>
                <v-layout v-if="page.attributes.layout === 'full'">
                  <v-flex xs12>
                    <div v-html="renderedMarkdown"/>
                  </v-flex>
                </v-layout>
                <v-layout 
                  v-if="page.attributes.layout === 'map'" 
                  row 
                  wrap>
                  <v-flex 
                    xs12 
                    sm12 
                    md6>
                    <div v-html="renderedMarkdown"/>
                  </v-flex>
                  <v-flex 
                    xs12 
                    sm12 
                    md6 
                    hidden-sm-and-down>
                    <!-- <h1 
                      style="margin-top: -25px;" 
                      class="text-xs-center">
                      <img 
                        :src="require('@/assets/img/map.png')" 
                        alt="ARI 2019 Map" 
                        height="500">
                    </h1> -->
                  </v-flex>
                </v-layout>
              </template>

              <template 
                v-slot:debug 
                v-if="config.debug">
                <div>{{ page }}</div>
              </template>
            </page-content>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import config from '@/config'

import PageContent from '@/components/PageContent'
export default {
  components: {
    PageContent
  },
  props: {
    page: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      config
    }
  },
  computed: {
    isAlignedLeft() {
      return this.page.attributes.alignment === 'left'
    },
    renderedMarkdown() {
      return this.page.html
    }
  },
  mounted() {},
  methods: {
    setPageStyle(theme) {
      return this.config.theme[theme]
    }
  }
}
</script>

<style>
.wrapper {
}

.full-height {
  padding-top: 85px !important;
  min-height: 100vh;
  padding-bottom: 120px !important;
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

div.sidebar {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 700;
  font-style: normal;
}

h1.main {
  font-size: 3.5em;
}

h2.header {
  font-size: 2.5em;
  margin-bottom: 35px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

h3 {
  margin-top: 30px;
  margin-bottom: 20px;
}

h2.session {
  margin-top: 35px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

h2.session.first {
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.muted {
  color: #666;
}

ul {
  margin-bottom: 30px;
  margin-top: 30px;
}

ul li {
  font-size: 18px;
}

ul li {
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
}

.page {
  border-top: 1px solid #555;
}
</style>
