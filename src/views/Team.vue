<template>
  <div class="team">
    <v-subheader class="font-weight-bold grey--text subtitle-1">Team</v-subheader>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <!-- Person image -->
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="person.avatar"/>
              </v-avatar>
            </v-responsive>
            
            <!-- Person info -->
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            
            <!-- Message -->
            <v-card-actions class="justify-center">
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          { name: 'Alex Smith', role: 'Web developer', avatar: '/alex_smith.svg'},
          { name: 'Anna Stone', role: 'Graphic designer', avatar: '/anna_stone.svg' },
          { name: 'Oliver Todd', role: 'Web developer', avatar: '/oliver_todd.svg' },
          { name: 'Chun Li', role: 'Social media maverick', avatar: '/chun_li.svg' },
          { name: 'Sarah Anderson', role: 'Sales guru', avatar: '/sarah_anderson.svg'}
        ]
      }
    }
  }
</script>
