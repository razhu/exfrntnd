<template>
<div>
  <img src="../assets/images/agetic.png" />
  <br/>
  <br/>
  <br/>
<h1>{{nombre}}</h1>
  <v-form v-model="valid" @submit.prevent="submit" ref="form" lazy-validation>
    <v-text-field
      label="Nombre Completo"
      v-model="name"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Nro de CI"
      v-model="email"
      required
    ></v-text-field>
    <v-select
      label="Departamento"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item es requerido']"
      required
    ></v-select>
    <v-checkbox
      label="Es trámite personal?"
      v-model="checkbox"
      :rules="[v => !!v || 'Debe aceptar para continuar!']"
      required
    ></v-checkbox>
    <v-btn
      color="success"
      :disabled="!valid"
      type="submit"
    >
      Consultar
    </v-btn>
    <v-btn @click="clear">Anular</v-btn>
  </v-form>
    <div v-if="valor">
        <hr>
        <div  style="background-color:'#eca1a6'">
          <h2>Su calculo de beneficios por año son: </h2>
          <br />
        <table style="width:100%">
      <tr>
        <th>Año</th>
        <th>Bono</th> 
      </tr>
      <tr>
        <td>2015</td>
        <td>200</td> 
      </tr>
      <tr>
        <td>2016</td>
        <td>230</td> 
      </tr>
      <tr>
        <td>2017</td>
        <td>250</td> 
      </tr>  
      </table>
      </div>
      <hr>
          <v-btn color="primary" dark @click.native.stop="dialog = true">Estoy de acuerdo</v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Voucher de cobro</v-card-title>
        <v-card-text>Su voucher de cobro es: 123X-89x-KL</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Gracias</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

              <v-btn color="error" dark @click.native.stop="dialog2 = true">No estoy de acuerdo</v-btn>
    <v-dialog v-model="dialog2" max-width="290">
      <v-card>
        <v-card-title class="headline">Revision de solicitud</v-card-title>
        <v-card-text>La fecha para revisar su solicitud es: <br/>17-09-2018</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog2 = false">Gracias</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        nombre: this.$store.state.nombre,
        myRecords: this.$store.state.myRecords,
        valid: true,
        name: '',
        email: '',
        select: null,
        items: [
          'La Paz',
          'Cochabamba',
          'Santa Cruz',
          'Chuquisaca'
        ],
        checkbox: false,
        valor: false,
        dialog: false,
        dialog2: false
      };
    },
    methods: {
      submit () {
        this.$store.state.myRecords.push({
          name: this.name,
          email: this.email,
          select: this.select
        })
        this.$refs.form.reset();
        this.valor = true
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>