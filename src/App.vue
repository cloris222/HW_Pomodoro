<template lang="pug">
v-app
  v-card
    v-navigation-drawer(ref="drawer" expand-on-hover rail permanent width="200" :rail-width="70" )
      v-list
        v-list-item
          v-list-item-content
              v-list-item-title.text-h6
                router-link(to="/").router-link 番茄鐘
      v-divider
      v-list
          v-list-item
            v-row.d-flex.justify-center.align-center
                  v-col
                    v-btn(icon="mdi-home" variant="text" to="/")
                  v-col.col-text.font-weight-bold
                    router-link(to="/").router-link 回到首頁
          v-list-item
            v-row.d-flex.justify-center.align-center
                v-col
                  v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
                v-col.col-text.font-weight-bold
                  router-link(to="/list").router-link 待辦清單
          v-list-item
            v-row.d-flex.justify-center.align-center
                  v-col
                    v-btn(icon="mdi-cog" variant="text" to="/settings")
                  v-col.col-text.font-weight-bold
                    router-link(to="/settings").router-link 設定
          v-list-item
            v-row.d-flex.justify-center.align-center
                    v-col
                      v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
                    v-col.col-text.font-weight-bold
                      span(v-if="notify" @click="toggleNotify") 關閉通知
                      span(v-else @click="toggleNotify") 開啟通知

  //- v-app-bar
  //-   v-app-bar-title 番茄鐘
  //-   v-spacer
  //-   v-btn(icon="mdi-home" variant="text" to="/")
  //-   v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
  //-   v-btn(icon="mdi-cog" variant="text" to="/settings")
  //-   v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-main
    v-container(fluid fill-height)
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
</template>

<script setup>
// import { computed, ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings

// await nextTick()
// const drawer = ref(null)
// let drawerwidth = 0

// const updateDrawerWidth = computed(() => {
//   drawerwidth = drawer.value.offsetwidth
//   console.log(drawerwidth)
//   return drawerwidth
// })

// onMounted(updateDrawerWidth)

</script>
