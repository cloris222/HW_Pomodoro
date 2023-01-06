<template lang="pug">
v-app
  v-card
    v-navigation-drawer( expand-on-hover rail permanent width="200" :rail-width="70")
      v-list
        v-list-item
          v-list-item-content
            v-list-item-title.text-h6 番茄鐘
      v-divider
      v-list
          v-list-item
            v-btn(icon="mdi-home" variant="text" to="/" )
          v-list-item
            v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
          v-list-item
            v-btn(icon="mdi-cog" variant="text" to="/settings")
          v-list-item
            v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  //- v-app-bar
  //-   v-app-bar-title 番茄鐘
  //-   v-spacer
  //-   v-btn(icon="mdi-home" variant="text" to="/")
  //-   v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
  //-   v-btn(icon="mdi-cog" variant="text" to="/settings")
  //-   v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-main
    v-container
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
      img(src="@/assets/pomotoro-active.png" class="tomato-active")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
</script>
