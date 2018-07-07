<template>
<div>
  <p v-if="myRecords.length > 0">
    {{myRecords}}
  </p>
  <v-form v-model="valid" @submit.prevent="submit" ref="form" lazy-validation>
    <v-text-field
      label="Nombre"
      v-model="name"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      required
    ></v-text-field>
    <v-select
      label="Item"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item es requerido']"
      required
    ></v-select>
    <v-checkbox
      label="Esta de acuerdo?"
      v-model="checkbox"
      :rules="[v => !!v || 'Debe aceptar para continuar!']"
      required
    ></v-checkbox>
    <v-btn
      :disabled="!valid"
      type="submit"
    >
      Enviar
    </v-btn>
    <v-btn @click="clear">Anular</v-btn>
  </v-form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        myRecords: this.$store.state.myRecords,
        valid: true,
        name: '',
        email: '',
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false
      };
    },
    methods: {
      submit () {
        this.$store.state.myRecords.push({
          name: this.name,
          email: this.email,
          select: this.select
        })
        this.$refs.form.reset()
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>