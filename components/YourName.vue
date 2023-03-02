<script setup lang="ts">
const calculation = ref<number>(50 * 1)
</script>
<template>
  <Html>
    <Head>
      <Title>Your Name</Title>
    </Head>
    <Body>
      <h1>Your Name {{ calculation }}</h1>
    </Body>
  </Html>
</template>
