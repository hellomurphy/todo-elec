<template>
  <header class="main-header">
    <nav>
      <div>
        <p>Todo App</p>
      </div>
      <div class="version">
        <p>
          Version: 1.0.0 <span><button>Check Update</button></span>
        </p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.main-header {
  height: 50px;
  display: flex;
  background-color: #364758;
}

.version {
  display: flex;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

nav div {
  height: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
}

p {
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 1rem;
  font-weight: 100;
}

p:hover {
  opacity: 0.9;
}
</style>
