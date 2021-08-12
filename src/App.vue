<template>
  <div id="app">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Franco</th>
      <th scope="col">Juan</th>
      <th scope="col">Jane</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">apellido</th>
      <td>Briano</td>
      <td>Perez</td>
      <td>Diaz</td>
    </tr>
    <tr>
      <th scope="row">edad</th>
      <td>29</td>
      <td>28</td>
      <td>30</td>
    </tr>
     <tr>
      <th scope="row">fecha de nacimiento</th>
      <td>1992</td>
      <td>1993</td>
      <td>1991</td>
    </tr>
     <tr>
      <th scope="row">Rut</th>
      <td>1.234.567-8</td>
      <td>1.234.567-8</td>
      <td>1.234.567-8</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
