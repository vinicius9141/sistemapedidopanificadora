<template>
 <div class="flex w-full h-screen bg-dark-primary">
  <form class="min-w-[22%] w-10 min-h-[60.6%] m-auto mt-[10vh] p-7 py-6 bg-dark-second">
    <img :src="LoginImg" alt="Panificadora" class="mb-5" />
    <label  class="text-slate-50 text-lg font-light ml-2">E-mail</label>
    <input type="text" class="w-full h-10 mb-3  rounded-2xl">
    <label  class="text-slate-50 text-lg font-light ml-2">Senha</label>
    <input type="text" class="w-full h-10 mb-3 rounded-2xl">
    <button type="submit" class="block w-[75%] h-10 mt-5 rounded-2xl mx-auto bg-success text-black text-xl font-semibold  ">Entrar</button>
  </form>
 </div>
</template>

<script lang="ts" setup>
import LoginImg from '@assets/login.png' 
  document.title = 'Entrar - Sistema Pedidos Panificadora'
</script>