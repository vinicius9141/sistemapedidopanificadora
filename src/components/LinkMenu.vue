<template>
  <RouterLink :to="path" class="block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70">{{label}}</RouterLink>
</template>
<script lang='ts' setup>
const {label,path} = defineProps<{label:string;path:string}>()
</script>