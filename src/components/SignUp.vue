<script>
import { auth, createUserWithEmailAndPassword } from '@/auth.js'
export default {
  name: 'SignUpComponent',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user
        console.log('Usuario registrado', user)
      } catch (error) {
        console.error('Error al registrar:', error.message)
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
