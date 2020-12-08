<template>
  <section>
    <img v-if="loading" src="../assets/loader.gif" alt="" class="loader" />
    <header v-else>
      <div class="search">
        <input
          v-model="search"
          type="text"
          class="searchTerm"
          placeholder="Search for developers..."
        />
        <button type="submit" class="searchButton">
          <img src="../assets/search.svg" alt="search" class="search-icon" />
        </button>
      </div>
    </header>
    <div class="container">
      <LeaderView :leaders="filterLeaders" />
    </div>
  </section>
</template>

<script lang="js">
import LeaderView from '../components/LeaderView'
export default {
  name: 'App',
  components: {
    LeaderView,
  },
  data() {
    return {
      leaders: [],
      loading: true,
      search: ""
    }
  },
  computed: {
    filterLeaders() {
      return this.leaders.filter(leader => {
        return leader.user.display_name.match(this.search)
      })
    }
  },
   mounted() {
    this.getLeaders()
  },
  methods: {
    async getLeaders() {
      try {
        const res = await fetch('https://wakatime-wrapper.herokuapp.com/leaders')
        const {data: users} = await res.json()
        const sortUserDescend = users.sort().reverse()
        this.leaders = sortUserDescend
        this.loading = false

      } catch (error) {
        this.loading = false
        this.showToast()
      }
    },
     showToast() {
      this.$toast({
        title: 'Error.',
        description: "An error occured! Please check your internet connection and try again",
        status: 'error',
        duration: 5000
      })
    }
  },
}
</script>

<style>
.container {
  color: #231e39 !important;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
  padding: 2rem 6rem 0;
}
.search-icon {
  width: 15px;
}
.searchTerm {
  width: 100%;
  height: 37px;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  padding-left: 14px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 37px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  padding: 0.5rem;
}
</style>
