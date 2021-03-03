<template>
  <div :class="{ 'text-xs-left': alignment === 'left' }">
    <slot name="header" />

    <slot name="content" />

    <slot name="debug" />
  </div>
</template>

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: 'center',
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style></style>
