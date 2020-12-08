<template>
  <div class="container">
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');
* {
  box-sizing: border-box;
}
body {
  color: #fff i !important;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1.5;
}
h1 {
  font-weight: 600;
}

/* Card Section Style */
.user-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-align: center;
  padding: 0 3rem;
}

p {
  margin: 0.4rem 0;
}
.mb {
  margin-bottom: 0.4rem;
}
.user-card {
  cursor: pointer;
  width: 22rem;
  height: 100%;
  min-height: 40rem;
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

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.lang {
  border: 1px solid;
  padding: 4px 12px;
  margin: 3px;
  display: inline-block;
  border-radius: 0.5px;
}
.lang-wrapper {
  text-align: left;
}
@media screen and (max-width: 425px) {
  .search {
    padding: 1rem 1rem 0 !important;
  }
  .user-container {
    padding: 0 0.5rem;
  }
}
</style>
