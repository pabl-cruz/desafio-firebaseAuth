<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar sticky-top bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="70" height="70" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active text-white" aria-current="page"
              ><RouterLink to="/">Inicio</RouterLink></a
            >
            <a class="nav-link"><RouterLink to="/login">Iniciar Sesión</RouterLink></a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
