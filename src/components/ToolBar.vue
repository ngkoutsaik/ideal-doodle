<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'ToolBar',
  computed:{
    drawer:
      {
        set(val) {
          console.log(val);
          this.$store.dispatch('toggleNavBar', val);

        },
        get() {
          console.log(this.$store.getters['toggleNavBar']);
          return this.$store.getters['toggleNavBar'];
        },
      }
  }
  };
</script>

<style scoped>

</style>
