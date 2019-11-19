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
    /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
    border:0 none;
    cursor:pointer;
    font-family: karma;
    font-size: 11px;
    color: var(--grisFonce);
    transition: background 500ms;
    width: 90px;
    height: 30px;
    /*border-radius: 60px / 50px;*/
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