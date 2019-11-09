<template>
  <div></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: "my-library",
  })
  export default class MyLibrary extends Vue {
    created(){
      console.log('created')
    }
    mounted(){
      console.log('mounted')
    }
  }
</script>
