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
  </section>
</template>

<script>
export default {
  props: {
    leaders: {
      type: Array,
    },
  },
  methods: {
    handleUser(id) {
      this.$router.push(`leader-details/${id}`)
    },
  },
}
</script>
