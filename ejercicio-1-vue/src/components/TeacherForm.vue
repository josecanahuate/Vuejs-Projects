<template>
    <div class="container">
      <h1>Enunciado del Ejercicio:</h1>
      <br />
      <p>
        Crear un Formulario que nos permita añadir profesores y nos permita
        especificar las materias de cada profesor,<br />para tenerlas
        registradas en un sistema.<br /><br />
      </p>
    </div>
  
    <section class="container mt-5">
      <h3>Añadir Profesores</h3>
      <div class="row mb-3">
        <div class="col">
          <label class="form-label">Nombre</label>
          <input type="text" v-model="teacher.nombre" class="form-control">
        </div>
        <div class="col">
          <label class="form-label">Apellidos</label>
          <input type="text" v-model="teacher.apellidos" class="form-control">
        </div>
      </div>
  
      <div class="row mb-3">
        <div class="col">
          <label class="form-label">DNI</label>
          <input type="text" v-model="teacher.dni" class="form-control">
        </div>
  
        <div class="col">
          <label class="form-label">Materias</label>
          <div class="input-group">
            <input type="text" v-model="materias" class="form-control">
            <button class="btn btn-primary" @click="handleMaterias()">Agregar</button>
          </div>
        </div>
      </div>
  
      <div class="row mb-3 float-start">
        <div class="col">
          <input type="checkbox" v-model="teacher.doc" id="doc">
          <label for="doc" class="form-check-label">Documentacion Entregada</label>
        </div>
      </div>
  <br>
  <br>
      <div class="row mb-3">
        <div class="col">
          <button class="btn btn-primary mt-2" @click="handleAddTeacher()">Agregar Profesor</button>
        </div>
      </div>
    </section>
  
    <section class="container">
      <h3 class="mt-5 mb-4">Listado de Profesores</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>DNI</th>
            <th>Materias</th>
            <th>Documentacion Entregada</th>
            <th>Acciones</th>
          </tr>
        </thead>
  
        <tbody>
          <tr v-for="eln in teachers" :key="eln.dni">
            <td>{{ eln.nombre }}</td>
            <td>{{ eln.apellidos }}</td>
            <td>{{ eln.dni }}</td>
            <td>
              <ul>
                <li v-for="(item, index) in eln.materias" :key="index">
                  {{ item }}
                </li>
              </ul>
            </td>
            <td>{{ eln.doc ? 'Entregada' : 'No Entregada' }}</td>
            <td>
              <a class="btn btn-warning btn-sm" @click="handleEditTeacher()">Editar</a>
              <a class="btn btn-danger btn-sm" href="">Borrar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  let teacher = ref({
    nombre: "",
    apellidos: "",
    dni: "",
    materias: [],
    doc: false,
  });
  
  let materias = ref("");
  
  //para limpiar input
  const handleMaterias = () => {
    if (materias.value.trim() !== "") {
      teacher.value.materias.push(materias.value.trim());
      materias.value = "";
    }
  };
  
  //Nuevo Registro
  let teachers = ref([]);
  const handleAddTeacher = () => {
    teachers.value.push({
      nombre: teacher.value.nombre,
      apellidos: teacher.value.apellidos,
      dni: teacher.value.dni,
      materias: teacher.value.materias,
      doc: teacher.value.doc,
    });
    teacher.value.nombre = "";
    teacher.value.apellidos = "";
    teacher.value.dni = "";
    teacher.value.materias = [];
    teacher.value.doc = false;
  };


  //Editar Registro
  const handleEditTeacher = () => {
    teachers.value.get({
      nombre: teacher.value.nombre,
      apellidos: teacher.value.apellidos,
      dni: teacher.value.dni,
      materias: teacher.value.materias,
      doc: teacher.value.doc,
    });
    teacher.value.nombre = "";
    teacher.value.apellidos = "";
    teacher.value.dni = "";
    teacher.value.materias = [];
    teacher.value.doc = false;
  };









  //Eliminar Registro
  </script>
  
  <style scoped></style>
  