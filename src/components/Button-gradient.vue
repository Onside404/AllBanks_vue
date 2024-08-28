<template>
  <button @click="buttonClick" class="btn-gradient">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button-gradient",
}
</script>