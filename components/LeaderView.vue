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
      <h1 class="user-name">{{ leader.user.display_name }}</h1>
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
.user-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
}
.user-card {
  cursor: pointer;
  width: 18rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1.4em 1rem 1rem 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.avatar {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  -webkit-transition: -webkit-box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
  -webkit-box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
}

.avatar:hover {
  -webkit-box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
}
</style>
