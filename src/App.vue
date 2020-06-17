<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  cursor: pointer;
}
html,
body {
  min-width: 1600px;
  min-width: 1200px;
  min-height: 100vh;
}
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
ul,
ol,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a {
  color: #666;
  text-decoration: none;
  outline: 0;
}
a:hover {
  text-decoration: none;
}
</style>
