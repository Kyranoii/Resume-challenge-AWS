<template>
  <nav class="navbar">
    <div class="navContainer">
      <a class="home" href="#home"><h1 id="name">Kyran Idowu</h1></a>
      <ul class="navList">
        <li v-for="link in links" class="navItem">
          <a class="navLink" href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ['Work history', 'School history', 'Projects', 'Competencies', 'Skills']
    }
  }
}
</script>