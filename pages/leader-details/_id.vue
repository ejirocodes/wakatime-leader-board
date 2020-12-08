<template>
  <section>
    <img v-if="!isReady" src="../../assets/loader.gif" alt="" class="loader" />
    <div v-if="isReady" class="details-page">
      <div class="back" @click="$router.go(-1)">Back</div>

      <div class="user-container">
        <div class="user-card">
          <img
            class="avatar mb"
            :src="leader.user.photo"
            :alt="leader.user.display_name"
            :title="leader.user.display_name"
          />
          <h1 class="user-name mb">{{ leader.user.display_name }}</h1>
          <p class="rank mb">Rank: {{ leader.rank }}</p>
          <p v-if="leader.user.username" class="username mb">
            @{{ leader.user.username }}
          </p>
          <p class="hrs mb">
            Total Hours Coded: {{ leader.running_total.human_readable_total }}
          </p>
          <p class="avg mb">
            Daily Average: {{ leader.running_total.human_readable_total }}
          </p>
          <p class="lang-wrapper">
            Languages Used: <br />
            <span
              v-for="language in leader.running_total.languages"
              :key="language.name"
              class="lang mb"
            >
              {{ language.name }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      leader: null,
      isReady: false,
    }
  },
  mounted() {
    this.getLeaders()
  },

  methods: {
    async getLeaders() {
      try {
        const res = await fetch(
          'https://wakatime-wrapper.herokuapp.com/leaders'
        )
        const { data: users } = await res.json()
        const matchedLeader = users.find(
          (user) => user.user.id === this.$route.params.id
        )
        this.leader = matchedLeader
        this.isReady = true
      } catch (error) {
        this.showToast()
        this.isReady = true
      }
    },
  },
  showToast() {
    this.$toast({
      title: 'Error.',
      description:
        'An error occured! Please check your internet connection and try again',
      status: 'error',
      duration: 5000,
    })
  },
}
</script>

<style scoped>
.back {
  padding: 10px;
  cursor: pointer;
}
</style>
