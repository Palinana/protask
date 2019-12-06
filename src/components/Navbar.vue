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
            <v-list class="primary rounded">
                <v-list-tile 
                    v-for="link in links" 
                    :key="link.text"
                >
                <v-hover v-slot:default="{ hover }">
                    <v-list-item :class="`${hover && 'grey'}`">
                        <router-link :to="link.route">
                            <v-list-item-icon>
                                <v-icon class="white--text" style="font-size: 20px">fas fa-{{ link.icon }}</v-icon>
                            </v-list-item-icon>

                        
                            <v-list-tile-content>
                                <v-list-tile-title class="white--text font-weight-light">{{ link.text }}</v-list-tile-title>
                            </v-list-tile-content>
                        </router-link>
                    </v-list-item>
                    </v-hover>
                </v-list-tile>
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