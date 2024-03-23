<template>
  <div class="directory glare">
    <RouterLink to="/history">I. History</RouterLink>
    <RouterLink to="/manifesto">II. Manifesto</RouterLink>
    <RouterLink to="/charter">III. Charter</RouterLink>
    <RouterLink to="/organization">IV. Organization</RouterLink>
  </div>
</template>

<style scoped>
.directory {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--clr-red2);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
