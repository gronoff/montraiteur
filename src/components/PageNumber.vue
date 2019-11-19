<template>
    <p> &lt; {{txt}} &gt; </p>
</template>
        
<script>
    export default {
      name: 'PageNumber',
      props: {
          txt: String
      }
    }
</script>
        
<style scoped>
  p {
    padding: 8px 15px 6px 15px;
    border:0 none;
    cursor:pointer;
    font-family: karma;
    font-size: 11px;
    color: var(--grisFonce);
    transition: background 500ms;
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p:hover {
    background: var(--grisClair);
  }
  p:active {
    box-shadow: none;
  }
</style>