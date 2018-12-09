<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <avatar-lib :name = 'myName'></avatar-lib>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myName: 'Angular Fanatic'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
