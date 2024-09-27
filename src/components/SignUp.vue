<script>
import { auth, createUserWithEmailAndPassword } from '@/auth.js'
export default {
  name: 'SignUpComponent',
  data() {
    return {
      email: '',
      password: '',
      showUserCreated: false,
      showSignUpError: false
    }
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.showUserCreated = true
      } catch (error) {
        console.error('Error al registrar:', error.message)
        this.showSignUpError = true
      }
    }
  }
}
</script>
<template>
  <div class="container">
    <h1 class="text-center my-4">Bienvenido a Portal de Datos</h1>
    <div class="my-3">
      <h2>Crear una cuenta</h2>
      <p>Es gratis y al iniciar sesión, podrás acceder a tu portal personal</p>
    </div>
    <div
      class="alert alert-primary alert-dismissible fade show"
      role="alert"
      v-show="showUserCreated"
    >
      Usuario Creado exitosamente!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-show="showSignUpError"
    >
      Error al crear usuario, intente de nuevo
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <form @submit.prevent="register()">
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
