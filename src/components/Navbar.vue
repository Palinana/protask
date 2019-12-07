<template>
    <nav>
        <v-toolbar flat app>
            <!-- Side bars -->
            <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

            <!-- App name -->
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Pro</span>
                <span>Task</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Dropdown Menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="grey" text v-on="on">
                        <v-icon class="mr-2" style="font-size: 15px">fas fa-chevron-down</v-icon>
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
                <v-btn text class="grey--text">
                    <span>Sign Out</span>
                    <v-icon right>fas fa-sign-out-alt</v-icon>
                </v-btn>
            </div>

        </v-toolbar>
        
        <!-- Side drawer -->
        <v-navigation-drawer v-model="drawer" absolute temporary class="primary">
            <v-list dense nav>
                <v-list-item
                v-for="link in links" 
                :key="link.text"
                link
                >
                    <v-list-item-icon>
                        <v-icon class="white--text" style="font-size: 20px">fas fa-{{ link.icon }}</v-icon>
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
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    { icon: 'th', text: 'Dashboard', route: '/dashboard' },
                    { icon: 'folder', text: 'My Projects', route: '/projects' },
                    { icon: 'user', text: 'Team', route: '/team' }
                ]
            }
        }
    }
</script>