<template>
  <div class="projects">
    <v-subheader class="font-weight-bold grey--text subtitle-1 justify-center mt-5">Projects</v-subheader>

    <!-- Projects -->
    <v-container class="my-4">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="project in myProjects" 
          :key="project.title"
        >
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person === 'Alex Smith' && project.status != 'complete'
        })
      }
    },
    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if(change.type === 'added') {
            this.projects.push({ 
              ...change.doc.data(),
              id: change.doc.id     
            }) 
          }
        })
      })         
    }
  }
</script>
