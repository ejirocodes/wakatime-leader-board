<template>
  <section>
    <header>
      <div class="srch_wrpr">
        <input type="checkbox" name="" class="checkbox" />
        <div class="srch_sb_cnt">
          <input
            type="text"
            name="text_bar"
            id=""
            class="sech_txt_inpt"
            placeholder="Type to search..."
            v-model="search"
          />
          <button class="srch_btn">
            <img src="../assets/search.svg" alt="" class="fa fa-search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
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
  methods: {
    async getLeaders() {
      const res = await fetch('https://wakatime-wrapper.herokuapp.com/leaders')
      const {data: users} = await res.json()
      const sortUserDescend = users.sort(function(a, b){return b-a})
      this.leaders = sortUserDescend
      this.loading = false
    },
  },
   mounted() {
    this.getLeaders()
  },
}
</script>

<style>
.container {
  color: #32325d !important;
}
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.srch_wrpr {
  width: 400px;
  max-width: 400px;
  height: 70px;
  position: relative;
  z-index: 1;
}
.srch_sb_cnt {
  width: 70px;
  height: 70px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: all 0.4s ease-in-out 0s;
  z-index: 0;
  border-radius: 5px;
}
.sech_txt_inpt {
  opacity: 0;
  height: 50px;
  left: 10px;
  border-radius: 30px;
  border: 0;
  width: 94%;
  padding: 0 60px 0 15px;
  background-color: transparent;
  color: #333;
  font-size: 15px;
  transition: all 0.4s ease-in-out 0s;
}
.sech_txt_inpt:focus {
  letter-spacing: 2px;
  text-transform: uppercase;
}
.sech_txt_inpt:focus,
.srch_btn:focus {
  outline: none;
}
.sech_txt_inpt,
.srch_btn {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}
.srch_btn {
  width: 70px;
  height: 70px;
  right: 0;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-color: transparent;
  border: 0;
  transition: all 0.4s ease-in-out 0s;
  font-size: 26px;
  cursor: pointer;
  color: #545454;
}
.srch_btn:after {
  position: absolute;
  content: '\f00d';
  font-family: fontAwesome;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  right: 10px;
  height: 30px;
  width: 30px;
  font-size: 28px;
  z-index: -1;
  visibility: hidden;
}
input.checkbox {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 70px;
  opacity: 0;
  right: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease-in-out 0s;
  cursor: pointer;
}
input.checkbox:checked {
  width: 30px;
  height: 30px;
  right: -14%;
  transform: translate(-50%, -60%);
}
input.checkbox:checked ~ .srch_sb_cnt {
  width: 100%;
  border-radius: 40px;
  background-color: #333;
  overflow: visible;
}
input.checkbox:checked ~ .srch_sb_cnt .srch_btn {
  width: 50px;
  height: 50px;
  right: 10px;
  border-radius: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
input.checkbox:checked ~ .srch_sb_cnt .sech_txt_inpt {
  opacity: 1;
}
input.checkbox:checked ~ .srch_sb_cnt .srch_btn:after {
  transform: translateY(-50%) rotate(90deg);
  right: -50px;
  visibility: visible;
  transition: all 0.6s cubic-bezier(0, 0.105, 0.035, 1.57);
  transition-delay: 0.5s;
  color: white;
}
.fa-search {
  width: 12px;
}
</style>
