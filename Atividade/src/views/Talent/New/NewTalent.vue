<template>
    <div>
      <h1>Cadastro de Talento</h1>
      
      <div class="form-group">
        <label for="nome">Nome completo</label>
        <input id="nome" type="text" />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="text" />
      </div>
      
      <div class="form-group">
        <label for="date">Data de nascimento</label>
        <input id="date" type="date" />
      </div>
      
      <div class="form-group">
        <label for="whatsapp">Whatsapp</label>
        <input id="whatsapp" type="number" />
      </div>
      
      <div class="form-group">
        <label for="area">Área de interesse</label>
        <select id="area">
          <option value=""></option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
          <option value="Full-stack">Full-stack</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="level">Nível profissional</label>
        <select id="level">
          <option value=""></option>
          <option value="Júnior">Júnior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      
      <div class="checkbox">
        <p>Suas habilidades</p>
        <label><input type="checkbox" value="html" /> HTML</label>
        <label><input type="checkbox" value="css" /> CSS3</label>
        <label><input type="checkbox" value="javascript" /> Javascript</label>
        <label><input type="checkbox" value="react" /> React</label>
        <label><input type="checkbox" value="react-native" /> React-native</label>
        <label><input type="checkbox" value="node" /> Node</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style>
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .checkbox label {
    margin-right: 10px;
  }
  </style>
  