<template>
    <div>
        <!-- 三级联动全局组件 -->
        <State></State>
        <Quick></Quick>
        <Gout></Gout>
        <Event></Event>
        <Menu></Menu>
    </div>
  </template>
  
  <script>
  import State from "@/views/State";
  import Event from "@/views/Event";
  import Menu from "@/views/Menu";
  import Quick from "@/views/Quick";
  import Gout from "@/views/Gout";
  export default {
      components: {
          State,
          Event,
          Menu,
          Quick,
          Gout
      }
  }
  </script>
  <style lang="scss" scoped>
      div{
            margin: 0 auto;
            width: 1230px;
            position: relative;
          }
  </style>
  