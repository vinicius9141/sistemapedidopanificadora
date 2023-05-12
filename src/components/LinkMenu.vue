<template>
  <RouterLink :to="path" :class="`block my-2 w-full py-3 text-center bg-[#363743] text-white hover:opacity-70 ${data.currentPath == path? 'border-l-8 border-l-success' : ''}`">{{label}}</RouterLink>
</template>
<script lang='ts' setup>
import router from '@/routes'
import {reactive, onMounted} from 'vue'

const {label,path} = defineProps<{label:string;path:string}>()
const data = reactive({
  currentPath: ''
})

onMounted(() => {
  data.currentPath = router.currentRoute.value.path
})
</script>