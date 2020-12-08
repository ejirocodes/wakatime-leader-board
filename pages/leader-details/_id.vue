<template>
  <div v-if="isReady" class="leader">
    <div class="card">
      <img
        :src="leader.user.photo"
        :alt="leader.user.full_name"
        class="avatar"
      />
      <div class="leader-details">
        <p class="rank">{{ leader.rank }} <span>Rank</span></p>
        <p class="hrs">
          Total Hours Coded: {{ leader.running_total.human_readable_total }}
        </p>
        <p class="avg">
          Daily Average: {{ leader.running_total.human_readable_total }}
        </p>
        <p class="user-name">Programmer: {{ leader.user.display_name }}</p>
      </div>
    </div>
  </div>
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
      const res = await fetch('https://wakatime-wrapper.herokuapp.com/leaders')
      const { data: users } = await res.json()
      const matchedLeader = users.find(
        (user) => user.user.id === this.$route.params.id
      )
      this.leader = matchedLeader
      console.log(this.leader)
      this.isReady = true
    },
  },
}
</script>

<style scoped>
.card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.hrs {
  display: inline-block;
  padding: 0.3rem 2rem;
  color: #fff !important;
  background-color: #172b4d;
  border-color: #172b4d;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.rank {
  display: inline-block;
  padding: 0.3rem 2rem;
  color: #fff;
  border-color: #11cdef;
  background-color: #11cdef;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.leader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
.avatar {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}
</style>
