<template>
  <div><render /></div>
</template>
<script setup lang="ts">
import { h, resolveComponent } from 'vue'
//设置defineProps默认值
const props = withDefaults(
  defineProps<{
    color?: string
    size: string | number
    name?: string
  }>(),
  {
    name: '',
    size: 16
  }
)

const render = () => {
  if (props.name && props?.name?.startsWith('ele-')) {
    return h(resolveComponent('ele-icon'), { color: props.color, size: props.size }, [
      h(resolveComponent(props.name))
    ])
  } else {
    return h('i')
  }
}
</script>
<style lang="scss" scoped></style>
