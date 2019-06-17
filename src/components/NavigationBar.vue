<template>
  <v-navigation-drawer
    fixed
    v-model="drawer"

    app>
    <v-list dense>
      <v-list-tile @click="callToDoPage">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>To Do</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="callUsersPage">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavigationBar',
    data() {
      return {};
    },
    computed: {
      drawer: {
        set(val) {
          this.$store.dispatch('toggleNavBar', val);
        },
        get() {
          return this.$store.getters['toggleNavBar'];
        }
      }
    },
    methods: {
      callToDoPage() {
        this.$router.push('/');
      },
      callUsersPage() {
        this.$router.push('/users');
      }
    }
  };
</script>

<style scoped>

</style>
