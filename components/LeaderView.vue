<template>
  <section class="user-container">
    <div
      v-for="leader in leaders"
      :key="leader.user.id"
      class="user-card"
      @click="handleUser(leader.user.id)"
    >
      <img
        class="avatar mb"
        :src="leader.user.photo"
        :alt="leader.user.display_name"
        :title="leader.user.display_name"
      />
      <h1 class="user-name mb">{{ leader.user.display_name }}</h1>
      <p class="rank mb">Rank: {{ leader.rank }}</p>
      <p class="rank mb">
        Total Hours Coded: {{ leader.running_total.human_readable_total }}
      </p>
      <p class="rank mb">
        Daily Average: {{ leader.running_total.human_readable_total }}
      </p>
      <p>
        Languages Used:
        <span
          v-for="language in leader.running_total.languages"
          :key="language.name"
          class="rank mb"
        >
          {{ language.name }}
        </span>
      </p>
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

<style>
.user-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
  padding: 0 3rem;
}

.mb {
  margin-bottom: 0.5rem;
}
.user-card {
  cursor: pointer;
  width: 20rem;
  height: 100%;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1.4em 1rem 1rem 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) all 0.4s;
}
.user-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transform: translateY(-10px);
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
