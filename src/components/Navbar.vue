<template>
  <div class="navbar">
    <div class="container nav-wrapper">
      <span class="brand-logo"
        ><h3 class="blue">Blue</h3>
        <h3 class="fish">Fish</h3></span
      >
      <div id="nav">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/history">History</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  /* background: rgb(202, 210, 253); */
  background: #2c3e50;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav {
  padding: 25px;
}

#nav a {
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  padding: 0px 20px;
  transition: all 0.5s ease 0s;
}

.brand-logo {
  color: #ffffff;
  display: flex;
}

.brand-logo .blue {
  color: #3357fa;
}

#nav a.router-link-exact-active {
  color: #3357fa;
}

button {
  padding: 12px 25px;
  background-color: #3357fa;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  font-weight: 600;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}

button:hover {
  background-color: #90a3f5;
}
</style>