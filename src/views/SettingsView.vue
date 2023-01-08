<template lang="pug">
v-row#settings.mt-8
  v-col(cols="12")
    h1.text-center 設定
  v-col(cols="12")
    v-table.settingsTable(density="comfortable")
      thead(height="52px")
        tr
          th
            span.firstLine.font-weight-bold 名稱
          th
            span.firstLine.font-weight-bold 試聽
          th
            span.firstLine.font-weight-bold 選擇
      tbody
        //- tr(v-for="alarm in settings.alarms" :key="alarm.id")
        tr.alarmLine(v-for="alarm in alarms" :key="alarm.id" height="100px")
          td
            span.font-weight-bold {{ alarm.name }}
          td
            audio(:src="alarm.file" controls)
          td
            v-radio-group(v-model="selectedAlarms")
              v-radio(:value="alarm.id")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarms } = storeToRefs(settings)
</script>
