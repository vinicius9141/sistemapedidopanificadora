<template>
  <div class="w-72 h-screen bg-dark-primary">
    <section class="w-full p-2 border-b border-b-white py-6">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/120px-User-avatar.svg.png?20201213175635"
        alt=""
        class="block w-5/12 mx-auto rounded-full bg-white"
      />
      <h2 class="text-white text-center mt-3">usuário Test</h2>
    </section>

    <section class="w-full p-2">
      <MenuLink path="/" label="Inicio" />
      <MenuLink path="/add-pedido" label="Pedidos" />
      <MenuLink path="/clientes" label="Clientes" />
      <MenuLink path="/produtos" label="Produtos" />
      <MenuLink path="/rotas" label="Rotas" />
      <MenuLink path="/motoristas" label="Motorista" />
      <MenuLink path="/veiculos" label="Veiculos" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import MenuLink from "@components/LinkMenu.vue";
</script>
