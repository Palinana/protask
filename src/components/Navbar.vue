<template>
    <nav>
        <v-toolbar flat app>
            <!-- Side bars -->
            <v-app-bar-nav-icon @click="drawer = !drawer" class="black--text"></v-app-bar-nav-icon>

            <!-- App name -->
            <v-toolbar-title class="black--text">
                <router-link to="/" class="black--text text-uppercase nav-title__name">
                    <span class="font-weight-light">Pro</span>
                    <span>Task</span>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Dropdown Menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="black" text v-on="on" class="nav-btn__menu">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" @click="method()" link>
                        <router-link :to="link.route" style="text-decoration: none">                        
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-light">{{ link.text }}</v-list-item-title>
                            </v-list-item-content>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
             
            <!-- Nav menu -->
            <div class="my-2">
                <router-link to="/">
                    <v-btn text class="black--text nav-btn__sign-out">
                        <span>Sign Out</span>
                        <v-icon right>exit_to_app</v-icon>
                    </v-btn>
                </router-link>
            </div>

        </v-toolbar>
        
        <!-- Side drawer -->
        <v-navigation-drawer v-model="drawer" absolute temporary class="secondary">
            <!-- User image -->
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" src="/alex_smith.svg">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Web developer</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"/>
                </v-flex>
            </v-layout>

            <!-- Menu -->
            <v-list dense nav>
                <v-list-item
                v-for="link in links" 
                :key="link.text"
                link
                >
                    <v-list-item-icon>
                        <v-icon class="white--text" style="font-size: 20px">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <router-link :to="link.route">
                        <v-list-item-content>
                            <v-list-item-title class="white--text font-weight-light">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import Popup from './Popup';

    export default {
        components: { Popup },
        
        data() {
            return {
                drawer: false,
                links: [
                    { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
                    { icon: 'folder', text: 'My Projects', route: '/projects' },
                    { icon: 'person', text: 'Team', route: '/team' }
                ]
            }
        }
    }
</script>

<style>
  .nav-title__name:last-child {
    font-weight: 500;
  }
  .nav-btn__menu,
  .nav-btn__sign-out {
    text-transform:none;
  }
  .v-list-item:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  a {
    text-decoration: none;
  }
</style>