<template>
  <div id="app">
    <v-app id="inspire">
      <NavigationBar></NavigationBar>
      <Toolbar></Toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout
            justify-center
            align-center>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>

  import NavigationBar from '../components/NavigationBar';
  import Toolbar from '../components/ToolBar';

  export default {
    name: 'ToDoPage',
    components: {
      NavigationBar,
      Toolbar
    },
    data: () => ({}),
    computed: {
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

<style>

</style>
