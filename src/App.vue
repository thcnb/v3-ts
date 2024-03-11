<script setup lang="ts">
import { getList } from '@/api/test'
import { ref } from 'vue'

const list = ref()

const init = async () => {
  try {
    const res = await getList({
      current: 1,
      size: 10
    })

    console.log('res=>', res)
    list.value = res.data.records
  } catch (e) {
    console.log(e)
  }
}
init()
</script>

<template></template>

<style scoped lang="scss"></style>
