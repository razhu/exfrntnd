<template>
<v-app id="app" standalone>
    <v-navigation-drawer
      temporary
      v-model="drawer" 
      :mini-variant.sync="mini" 
      light 
      overflow
      absolute
    >
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="./assets/images/logo2.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>AGETIC</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><router-link to="/">Inicio</router-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar fixed class="purple" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Simplifación de Trámites</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat router to="/">
          <v-icon left dark>assignment</v-icon>
            Firmulario
        </v-btn>
      </v-toolbar-items>


    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
        <div>
        <router-link to="/">Inicio</router-link>
      </div>
      </v-container>
    </main>
      <v-footer fixed class="purple">
      <span class="white--text">© AGETIC 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
             drawer: null,
        mini: false,
        right: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(assets/fonts/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.woff) format('woff'),
       url(assets/fonts/iconfont/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}
</style>
