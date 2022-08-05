<template>
  <div class="container">
    <form @submit.prevent="add">
      <input id="todoText" v-model="todoText" type="text" />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="todo in data.todoList" :key="todo.id">
        <div>
          <p :style="{ 'text-color': red }">
            {{ todo.title }}
          </p>
          <button @click="isDone(todo.id)">Done</button>
          <button @click="deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      data: [],
      todoText: "",
    };
  },
  async fetch() {
    this.data = await fetch("http://localhost:9080/api").then((res) =>
      res.json()
    );
    console.log(this.data);
  },
  methods: {
    add() {
      const randomId = Math.ceil(Math.random() * 100);
      axios
        .post("http://localhost:9080/api", {
          id: randomId,
          title: todoText.value,
          isDone: false,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      this.data.todoList.push({
        id: randomId,
        title: todoText.value,
        isDone: false,
      });
    },
    isDone(id) {
      axios
        .delete(`http://localhost:9080/api/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.data.todoList.find((todo) => todo.id === id);
    },
    deleteTodo(id) {
      console.log(`Give id: ${id}`);
      this.data.todoList = this.data.todoList.filter((todo) => {
        return todo.id !== id;
      });
      console.log(this.data.todoList);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>
