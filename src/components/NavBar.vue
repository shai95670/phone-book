<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">PhoneBook</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><font-awesome-icon icon="sign-in-alt" class="icon"/>Login</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="shopping-cart" class="icon"/>My Orders</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="tags" class="icon"/>My Prices</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="user-edit" class="icon"/>Update Details</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="lock" class="icon"/>Reset Password</b-nav-item>
          <b-nav-item href="#"><font-awesome-icon icon="question-circle" class="icon"/>FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "PhoneBookNav",
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  margin-right: 7px;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  align-items: flex-start;
}
</style>
