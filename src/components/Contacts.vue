<template>
  <b-container>
    <b-card no-body class="contact-list">
      <b-card no-body header="Contacts">
        <b-list-group flush>
          <b-list-group-item
            v-for="contact in contacts"
            :key="contact.id"
            class="d-flex justify-content-between align-items-center"
          >
            {{ contact.data().first_name }} {{contact.data().last_name}}
            <b-btn class="btn" @click="onDelete(contact)" variant="danger">
              <b-icon icon="trash"></b-icon>
            </b-btn>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card>

    <b-card border-variant="secondary" class="contact-form">
      <b-card-header header-bg-variant="default">New Contact</b-card-header>
      <b-card-body>
        <b-form inline class="input">
          <label class="sr-only" for="inline-form-input-name">First Name</label>
          <b-input
            v-model="addContactData.first_name"
            id="inline-form-input-name"
            class="mb-5 mr-sm-5 mb-sm-0"
            placeholder="First Name"
            ref="contact.first_name"
          ></b-input>

          <label class="sr-only" for="inline-form-input-name">Last Name</label>
          <b-input
            v-model="addContactData.last_name"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Last Name"
            ref="contact.last_name"
          ></b-input>
        </b-form>
        <b-button @click="onAdd" variant="success" class="btn">Add Contact</b-button>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import db from "@/db.js";
export default {
  name: "contacts",
  props: ["contacts"],
  data: function() {
    return {
      addContactData: {
        first_name: "",
        last_name: ""
      }
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
      this.addContactData.first_name = "";
      this.addContactData.last_name = "";
    },
    onDelete(contact) {
      db.collection("contacts")
        .doc(contact.id)
        .delete()
        .then(this.getContact());
    }
  }
};
</script>

<style scoped>
.contact-list {
  margin-bottom: 50px;
}

.input {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>