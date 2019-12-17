<template>
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Add new project
        </v-btn>
      </template>

      <v-card>
        <!-- Title -->
        <v-card-title
          class="headline grey lighten-2 font-weight-regular"
          primary-title
        >
          Add a New Project
        </v-card-title>
        
        <!-- Form -->
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field v-model="title" clearable label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea v-model="content" name="input-7-1" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>

                <!-- Calendar -->
                <v-menu v-model="menu" :close-on-content-click="false">
                    <template v-slot:activator="{ on }">
                        <v-text-field v-on="on" :rules="inputRules"
                            :value="formattedDate" clearable label="Due date" prepend-icon="date_range">
                        </v-text-field>
                        <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
                    </template>
                </v-menu>

                <div class="text-center">
                    <v-btn text @click="submit" class="primary mx-0 mt-3" :loading="loading">Add Project</v-btn>
                </div> 
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;

        let modified = new Date(this.due.replace(/-/g , ','));
        let formattedDate = format(modified, 'MMM d, yyyy');

        const project = { 
          title: this.title,
          content: this.content,
          due: formattedDate,
          person: 'The Net Ninja',
          status: 'ongoing'
        }

        // asynch
        db.collection('projects').add(project).then(() => {
          console.log('added to db');
          this.loading = false;
          this.dialog = false;
        })
      }
    }
  },
  computed: {
    formattedDate () {
      let formattedDate = '';

      if (this.due) {
        let modified = new Date(this.due.replace(/-/g , ','));
        formattedDate = format(modified, 'MMM d, yyyy');
      }
      
      return formattedDate;
    }
  }
}
</script>