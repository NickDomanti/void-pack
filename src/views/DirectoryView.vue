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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--clr-red2);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}

a {
  display: block;
  border: 1px solid var(--clr-red2);
  padding: 1rem 3rem;
  will-change: background-color;
  transition: background-color 100ms;
}

a:hover {
  background-color: var(--clr-red3);
}
</style>
