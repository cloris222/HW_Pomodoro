<template lang="pug">
v-row#list.mt-8.ml-150
  v-col(cols="5")
    h1.text-center.mb-4 待辦事項
    v-divider.mb-8(color="#D7C4BB")
    v-text-field(ref="input" v-model="newItem" label="新增事項" :rules="[rules.required, rules.length]" @keydown.enter="onInputSubmit")
      template(#append)
        v-btn(icon="mdi-plus" variant="text" class="plusicon" @click="onInputSubmit")
    v-card(v-if="items.length === 0")
      v-card-title.font-weight-black 沒有事項
      v-divider(color="#2C3E2C")
      v-card-text.font-weight-bold 這裡還沒有事項喔，快去新增一個試試吧！
    v-card(v-for="item in items" v-else :key="item.id" ref="editInputs")
      v-text-field(v-if="item.edit" v-model="item.model" variant="filled" autofocus :rules="[rules.required, rules.length]" @keydown.enter="confirmEditItem(item.id)" @keydown.esc="undoEditItem(item.id)")
      v-card-title.font-weight-black(v-else) {{ item.name }}
      v-row(v-if="item.edit").d-flex.justify-space-between
        v-col
          v-card-subtitle
            span.font-weight-bold {{ date }}
        v-col.editicon
          span
            v-btn(icon="mdi-check" variant="text" color="green" @click="confirmEditItem(item.id)" )
            v-btn(icon="mdi-undo" variant="text" color="red" @click="undoEditItem(item.id)")
      v-card-subtitle(v-else).font-weight-bold {{ date }}
      span
        v-btn(icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)")
        v-btn(icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)")
    //- v-table
      //- thead
      //-   tr
      //-     th 名稱
      //-     th 操作
      //- tbody
      //-   tr(v-if="items.length === 0")
      //-     td.text-center(colspan="2") 沒有事項
      //-   tr(v-for="item in items" v-else :key="item.id" ref="editInputs")
      //-     td
      //-       v-text-field(v-if="item.edit" v-model="item.model" autofocus :rules="[rules.required, rules.length]")
      //-       span(v-else) {{ item.name }}
      //-     td
      //-       span(v-if="item.edit")
      //-         v-btn(icon="mdi-check" variant="text" color="green" @click="confirmEditItem(item.id)")
      //-         v-btn(icon="mdi-undo" variant="text" color="red" @click="undoEditItem(item.id)")
      //-       span(v-else)
      //-         v-btn(icon="mdi-pencil" variant="text" color="green" @click="editItem(item.id)")
      //-         v-btn(icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)")
  v-col(cols="5").mx-auto
    h1.text-center.mb-4 已完成事項
    v-divider.mb-8(color="#D7C4BB")
    v-card(v-if="finishedItems.length === 0")
      v-card-title.font-weight-black 沒有事項
      v-divider(color="#2C3E2C")
      v-card-text.font-weight-bold 這裡還沒有事項喔，快去新增一個試試吧！
    v-card(v-for="item in finishedItems" v-else :key="item.id" ref="editInputs")
      v-card-title.font-weight-black {{ item.name }}
      v-row.d-flex.justify-space-between
        v-col
          v-card-subtitle
            span.font-weight-bold {{ date }}
        v-col.delicon.text-center
          v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")

    //- v-table
    //-   thead
    //-     tr
    //-       th 名稱
    //-       th 操作
    //-   tbody
    //-     tr(v-if="finishedItems.length === 0")
    //-       td.text-center(colspan="2") 沒有事項
    //-     tr(v-for="item in finishedItems" v-else :key="item.id" ref="editInputs")
    //-       td {{ item.name }}
    //-       td
    //-         v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
import moment from 'moment'

const list = useListStore()
const { addItem, editItem, delItem, confirmEditItem, undoEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const newItem = ref('')
const input = ref(null)
const editInputs = ref([])
const date = moment().format('LLL')

const rules = {
  required (v) {
    return !!v || '欄位必填'
  },
  length (v) {
    return v.length >= 3 || '必須三個字以上'
  }
}

const onInputSubmit = async () => {
  const valid = await input.value.validate()
  console.log(valid)
  if (valid.length > 0) return
  addItem(newItem.value)
  input.value.$el.querySelector('input').blur()
  input.value.reset()
}
</script>
