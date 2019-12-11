<template>
  <div class="team">
    <v-subheader class="font-weight-bold grey--text subtitle-1 justify-center mt-5">Team</v-subheader>

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
  import db from '@/fb';

  export default {
    data() {
      return {
        team: []
      }
    },
    created() {
      db.collection('team').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if(change.type === 'added') {
            this.team.push({ 
              ...change.doc.data(),
              id: change.doc.id     
            }) 
          }
        })
      })  
    }        
  }
</script>
