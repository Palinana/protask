<template>
  <div class="dashboard">
    <v-subheader class="font-weight-bold grey--text subtitle-1 justify-center mt-5">Dashboard</v-subheader>

    <v-container class="my-12">
      <!-- Sort Projects -->
      <v-layout row justify-start class="mb-4 pl-3 pr-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>

      <!-- Projects -->
      <v-card flat class="d-flex flex-column pl-3 pr-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2 style="display: flex; justify-content: center; flex-direction: column;">
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
  import db from '@/fb';

  export default {
    data() {
      return {
        projects: []
      }
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1) 
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if(change.type === 'added') {
            this.projects.push({ 
              ...change.doc.data(),  //takes all properties and spreads them into an object for each
              id: change.doc.id     //id from the store
            })
          }
        })
      }) 
    },
  } 
</script>

<style>
  .project {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .project.complete {
      border-left: 4px solid #6ca78c; 
  }
  .project.ongoing {
      border-left: 4px solid #ECB866
  }
  .project.overdue {
      border-left: 4px solid #e25021;
  }
  .v-chip.complete {
      background: #6ca78c !important;
  }
  .v-chip.ongoing {
      background: #ECB866 !important;
  }
  .v-chip.overdue{ 
      background: #e25021 !important; 
  }
</style>