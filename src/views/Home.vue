<template>
  <div class="home">

    <v-container class="my-12">
        <v-layout row justify-start class="mb-4 pl-3 pr-3">
            <router-link to="/" class="navigation-logo">
                <v-icon class="" color="black" style="font-size: 40px">dashboard</v-icon>
            </router-link>

            <div class="navigation-list">
                <ul v-for="link in links" :key="link.text">
                    <li>{{ link.text }}</li>
                </ul>
            </div>
        </v-layout>        
    </v-container>

    <v-layout row justify-start class="section__container">
      <div class="section__left">
        <h1 class="display-3 primary-heading">Powerful insights <br> into your team</h1>
        <p class="title secondary-heading my-7">Project planing and time tracking <br> for agile teams</p>
        <div class="demo-button__container ">
          <v-btn depressed class="grey--white depressed my-8 demo-btn">See a demo</v-btn>
        </div>
      </div>

      <div class="section__right">
        <img :src="require('../assets/devices.png')" />
      </div>
    </v-layout>
  </div>
</template>

<script>

  export default {
    data() {
        return {
            links: [
                { text: 'Product', route: '/product' },
                { text: 'Features', route: '/features' },
                { text: 'Pricing', route: '/pricing' },
                { text: 'Login', route: '/login' }
            ]
        }
    },
  }
</script>

<style>
  .navigation-logo {
    margin-right: auto;
  }
  .navigation-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .navigation-list ul li {
    list-style: none;
    font-weight: 500;
  }
  .navigation-list ul:last-child li {
    font-weight: 300;
  }
  .section__container {
    display: flex;
    margin-right: -16px;
    margin-left: -16px;
  }
  .section__left {
    margin-top: 110px;
    padding: 0 140px;
    flex: 1;
  }
  .section__right {
    flex: 1;
    text-align: right;
  }
  .primary-heading {
    font-weight: 700 !important;
  }
  .secondary-heading {
    font-weight: 300 !important;
  }
  .demo-btn {
    background-color: #FD5D5F !important;
    border-color: #FD5D5F !important;
    color: white !important;
  }
  @media screen and (max-width: 664px) {
    .section__left {
      padding: 0 30px;
    }
  }
  @media screen and (max-width: 1210px) {
    .section__left {
      order:2;
    }
    .section__right {
      order:1;
    }
  }
</style>
