<template>
  <section>
    <header>
      <div class="search">
        <input
          v-model="search"
          type="text"
          class="searchTerm"
          placeholder="Search for developers..."
        />
        <button type="submit" class="searchButton">
          <img src="../assets/search.svg" alt="" />
        </button>
      </div>
    </header>
    <div class="container">
      <img
        v-if="loading"
        src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
        alt=""
        class="loader"
      />
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
        const sortUserDescend = users.sort(function(a, b){return b-a})
        this.leaders = sortUserDescend
        this.loading = false

      } catch (error) {
        this.loading = false
        this.showToast()
        console.error(error);
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
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.search {
  width: 100%;
  position: relative;
  display: flex;
  padding: 2rem 6rem 0;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  padding-left: 14px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  height: 100%;
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
