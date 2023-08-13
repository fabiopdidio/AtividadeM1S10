<template>
  <form @submit.prevent="handleSubmit" class="new-form">
    <!-- Cria formulário e define evento de envio -->
    <h1>Cadastro de talento</h1>

    <!-- Inputs comuns -->
    <label for="name">Nome Completo</label>
    <input id="name" v-model="name" />

    <label for="email">Email</label>
    <input id="email" v-model="email" />

    <label for="date">Data de nascimento</label>
    <input type="date" id="date" v-model="birthday" />

    <label for="phone">Whatsapp</label>
    <input id="phone" v-model="phone" />

    <!-- Select com opções de áreas -->
    <label for="area">Área de interesse</label>
    <select v-model="area">
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="fullstack">Fullstack</option>
    </select>

    <label for="nivel">Nível</label>
    <select v-model="level">
      <option value="junior">Junior</option>
      <option value="pleno">Pleno</option>
      <option value="senior">Senior</option>
    </select>

    <p>Selecione suas habilidades</p>

    {{ skills.length }}

    <!-- Definição de tecnologias baseado na área de interesse selecionada -->
    <div v-if="area === 'frontend' || area === 'fullstack'">
      <label><input type="checkbox" v-model="skills" value="HTML" />HTML</label>
      <label><input type="checkbox" v-model="skills" value="CSS" /> CSS</label>
      <label><input type="checkbox" v-model="skills" value="JAVASCRIPT" /> JAVASCRIPT</label>
      <label><input type="checkbox" v-model="skills" value="VUE" /> VUE</label>
    </div>

    <div v-if="area === 'backend' || area === 'fullstack'">
      <label><input type="checkbox" v-model="skills" value="Node" />Node</label>
      <label> <input type="checkbox" v-model="skills" value="Php" /> PHP</label>
      <label><input type="checkbox" v-model="skills" value="Laravel" /> Laravel</label>
      <label><input type="checkbox" v-model="skills" value="Java" /> Java</label>
    </div>

    <!-- Área de texto livre -->
    <label>Carta de apresentacao</label>
    <textarea v-model="introdution"></textarea>

    <!-- Botão de envio -->
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import * as yup from 'yup'

export default {
  data() {
    return {
      name: '',
      email: '',
      birthday: '',
      phone: '',
      area: '',
      level: '',
      skills: [],
      introdution: ''
    }
  },
  methods: {
    handleSubmit() {
      try {
        console.log('entrei aqui')
        const schema = yup.object().shape({
          name: yup.string().required('O nome é obrigatório'),
          email: yup.string().email('Email não inválido').required('Email é obrigatório'),
          area: yup.string().required('A area é obrigatorio')
        })

        schema.validateSync({
          name: this.name,
          email: this.email,
          area: this.area
        })
      } catch (error) {
        alert('Error no formulario')
      }
    }
  },
  watch: {
    area(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.skills = []
      }
    }
  }
}
</script>

<style scoped>
.new-form {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
</style>
