<template>
  <div class="btn">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.btn {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  background-color: #21566b;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 5px 0px;
  &:after {
    content: ' \2192';
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
