<template>
  <div class="default-layout">
    <Nuxt />
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.nuxt {
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
