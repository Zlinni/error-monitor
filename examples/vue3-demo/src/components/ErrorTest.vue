<template>
  <div>
    <button @click="triggerError">触发错误</button>
    <button @click="triggerAsyncError">触发异步错误</button>
  </div>
</template>

<script setup lang="ts">
const triggerError = () => {
  throw new Error("这是一个同步错误");
};

const triggerAsyncError = async () => {
  await Promise.reject("这是一个异步错误");
};
</script>
