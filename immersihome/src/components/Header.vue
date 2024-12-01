<template>
    <header class="app-header">
      <nav class="navbar">
        <div class="logo">
          <h1>ImmersiHome</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  