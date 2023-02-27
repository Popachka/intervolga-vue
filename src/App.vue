<template>
  <header
    class="container-fluid mx-auto bg-slate-600 flex flex-col sm:flex-row justify-between items-center p-4"
  >
    <router-link to="/" class="text-2xl text-white font-bold p-2">CRUD HERAD</router-link>
    <nav class="text-white flex items-cetner space-x-4 text-xl">
      <router-link to="/" class="hover:text-cyan-400">Товары</router-link
      ><router-link to="/categories" class="hover:text-cyan-400">Категории</router-link>
    </nav>
    <div class="w-[200px] hidden md:block"></div>
  </header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
