<template>
  <div id="app">
    <Contacts v-bind:contacts="contacts" />
  </div>
</template>

<script>
import db from "@/db.js";

import Contacts from "@/components/Contacts.vue";

export default {
  name: "App",
  components: {
    Contacts
  },

  data: function() {
    return {
      contacts: []
    };
  },

  methods: {
    getContact() {
      db.collection("contacts")
        .orderBy("last_name")
        .get()
        .then(snapshot => {
          this.contacts = snapshot.docs;
        });
    },
    onAdd() {
      db.collection("contacts")
        .add(this.addContactData)
        .then(this.getContact());
    },
    onDelete(contact) {
      db.collection("contacts")
        .doc(contact.id)
        .delete()
        .then(this.getContact());
    }
  },
  mounted: function() {
    this.getContact();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
