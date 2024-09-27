<script>
import { signInWithEmailAndPassword, auth } from '@/auth'
export default {
  name: 'LogInComponent',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const { email, password } = this
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log('Usuario Inicio sesión', user)
      } catch (error) {
        console.error('Error al Iniciar Sesión:', error.message)
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
