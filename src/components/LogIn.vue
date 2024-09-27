<script>
import { signInWithEmailAndPassword, auth } from '@/auth'
export default {
  name: 'LogInComponent',
  data() {
    return {
      email: '',
      password: '',
      showUserLoggedIn: false,
      showLogInError: false
    }
  },
  methods: {
    async login() {
      const { email, password } = this
      //refrescar estado de alerta a valor false
      this.showLogInError = false
      try {
        await signInWithEmailAndPassword(auth, email, password)
        this.showUserLoggedIn = false
        this.$nextTick(() => {
          this.showUserLoggedIn = true
        })
        this.$router.push('/home')
      } catch (error) {
        console.error('Error al Iniciar Sesión:', error.message)
        this.showLogInError = true
      }
    }
  }
}
</script>
<template>
  <div class="container">
    <h1 class="text-center my-4">Bienvenido a Portal de Datos</h1>
    <div class="my-3">
      <h2>Iniciar Sesión</h2>
    </div>
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="showUserLoggedIn"
    >
      Ingreso correcto, redirigiendo a pantalla de inicio...
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="showLogInError">
      Error al ingresar usuario, intente de nuevo con una credencial válida
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <form @submit.prevent="login()">
      <div class="mb-3">
        <label for="email">Correo electrónico:</label>
        <input
          class="form-control"
          type="email"
          v-model="email"
          placeholder="inserte su dirección de correo"
        />
      </div>
      <div class="mb-3">
        <label for="password">Contraseña:</label>
        <input class="form-control" type="password" v-model="password" placeholder="contraseña" />
      </div>
      <input type="submit" value="Registrar" class="btn btn-primary" />
    </form>
  </div>
</template>
