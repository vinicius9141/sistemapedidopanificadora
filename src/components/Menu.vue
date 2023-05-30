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
      <MenuLink path="/add-motorista" label="Cadastro de Motorista" />
      <MenuLink path="/add-rota" label="Cadastro de Rotas" />
      <MenuLink path="/add-produto" label="Cadastro de Produtos" />
      <MenuLink path="/add-veiculo" label="Cadastro de Veiculos" />
      <MenuLink path="/add-cliente" label="Cadastro de Clientes" />
      <MenuLink path="/add-pedido" label="Cadastro de Pedido" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import MenuLink from "@components/LinkMenu.vue";
</script>
