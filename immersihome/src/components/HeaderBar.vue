<template>
  <header class="headerbar">
    <div class="container">
      <nav>
        <ul class="headerbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.headerbar {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.headerbar .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headerbar-links {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  gap: 1rem;
}

.headerbar-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.headerbar-links a:hover {
  text-decoration: underline;
}
</style>
