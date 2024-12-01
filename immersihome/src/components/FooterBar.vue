<template>
  <footer class="footbar">
    <div class="container">
      <p>&copy; 2024 ImmersiHome. All rights reserved.</p>
      <nav>
        <ul class="footbar-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FootBar",
};
</script>

<style scoped>
.footbar {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.footbar .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footbar-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.footbar-links a {
  color: white;
  text-decoration: none;
}

.footbar-links a:hover {
  text-decoration: underline;
}
</style>
