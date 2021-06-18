<template>
  <div id="app">
    <transition name="fade">
      <Header v-if="isHeaderVisible" :dark="isFlippedColorsPage" :static-header="isStaticHeaderPage"/>
    </transition>
    <router-view @set-header-visible="isHeaderVisible = $event"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {
    Header: () => import('@/components/Header')
  },

  data () {
    return {
      isHeaderVisible: true,

      flippedColorsPages: [
        'search'
      ],

      staticHeaderPages: [
        'search'
      ]
    }
  },

  created () {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.isHeaderVisible = true
      }
    })

    function getCoordintes () {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      function success (pos) {
        const crd = pos.coords
        const lat = crd.latitude.toString()
        const lng = crd.longitude.toString()
        const coordinates = [lat, lng]
        getCity(coordinates)
      }

      function error (err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    }

    const getCity = (coordinates) => {
      const xhr = new XMLHttpRequest()
      const lat = coordinates[0]
      const lng = coordinates[1]

      xhr.open('GET', `https://us1.locationiq.com/v1/reverse.php?key=${process.env.VUE_APP_LOCATIONIQ_API_KEY}&lat=` +
        lat + '&lon=' + lng + '&format=json', true
      )

      const processRequest = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText)
          if (response.address.city)
            this.setUserCity(response.address.city)
        }
      }

      xhr.send()
      xhr.onreadystatechange = processRequest
      xhr.addEventListener('readystatechange', processRequest, false)
    }

    getCoordintes()
  },

  computed: {
    isFlippedColorsPage () {
      return this.flippedColorsPages.findIndex(i => i === this.$route.name) !== -1
    },

    isStaticHeaderPage () {
      return this.staticHeaderPages.findIndex(i => i === this.$route.name) !== -1
    }
  },

  methods: {
    ...mapMutations(['setUserCity'])
  }
}
</script>
