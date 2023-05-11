<template>
  <div class="w-72 h-screen bg-dark-primary ">
    <section class="w-full p-2 border-b border-b-white py-6">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/120px-User-avatar.svg.png?20201213175635" alt="" class="block w-5/12 mx-auto rounded-full bg-white">
      <h2 class="text-white text-center mt-3">usuário Test</h2>
    </section>

    <section class="w-full p-2">
      <RouterLink to="/" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Inicio</RouterLink>
      <RouterLink to="/add-motorista" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Motorista</RouterLink>
      <RouterLink to="#" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Rotas</RouterLink>
      <RouterLink to="/add-produto" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Produtos</RouterLink>
      <RouterLink to="#" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Veiculos</RouterLink>
      <RouterLink to="#" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Clientes</RouterLink>
      <RouterLink to="#" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">Cadastro de Pedido</RouterLink>
    </section>
  </div>
</template>