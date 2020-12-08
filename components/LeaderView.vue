<template>
  <section class="user-container">
    <div
      v-for="leader in leaders"
      :key="leader.user.id"
      class="user-card"
      @click="handleUser(leader.user.id)"
    >
      <img
        class="avatar"
        :src="leader.user.photo"
        :alt="leader.user.display_name"
        :title="leader.user.display_name"
      />
      <p class="user-name">Programmer: {{ leader.user.display_name }}</p>
      <p class="rank">Rank: {{ leader.rank }}</p>
      <p class="rank">
        Total Hours Coded: {{ leader.running_total.human_readable_total }}
      </p>
      <p class="rank">
        Daily Average: {{ leader.running_total.human_readable_total }}
      </p>
      <!-- <p class="rank" v-for="leader.running_total.languages" :key="">
        Languages Used: {{  }}
      </p> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    leaders: {
      type: Array,
    },
  },
  // computed: {
  //   leadersSort() {
  //     return this.leaders.sort((a, b) => b - a)
  //   },
  // },
  mounted() {},
  methods: {
    handleUser(id) {
      this.$router.push(`leader-details/${id}`)
    },
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway|Varela+Round|Coda);
@import url(http://weloveiconfonts.com/api/?family=entypo);
.user-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  text-align: center;
}
.user-card {
  cursor: pointer;
}
.avatar {
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
}
</style>
