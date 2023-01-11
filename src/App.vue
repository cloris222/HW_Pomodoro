<template lang="pug">
v-app
  v-card
    v-navigation-drawer(ref="drawer" expand-on-hover rail permanent width="200" rail-width="70" )
      v-list
        v-list-item.plain-title(to="/" variant="plain")
              v-list-item-title.text-h5 番茄鐘
      v-divider
      v-list
        v-list-item.items( prepend-icon="mdi-home" title="回到首頁" to="/")
        v-list-item.items( prepend-icon="mdi-format-list-bulleted" title="待辦清單" to="/list")
        v-list-item.items( prepend-icon="mdi-cog" title="設定" to="/settings")
        v-list-item.items( :prepend-icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" :title="notify ?'關閉通知':'開啟通知'" @click="toggleNotify")

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
// import { computed, ref, onMounted, nextTick } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings

// const drawer = ref(null)
// let drawerwidth = 0

// const updateDrawerWidth = computed(() => {
//   drawerwidth = drawer.value.offsetWidth
//   console.log(drawerwidth)
//   return drawerwidth === 70
// })

// onMounted(updateDrawerWidth)

</script>
