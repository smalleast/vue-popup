<template>
  <aside class="vue-popup-container" v-on:click="hide()">
    <div class="popup"
         :data-visible="visible"
         :data-direction="direction"
         v-on:transitionend="_onTransitionEnd()"
    >
      <slot></slot>
    </div>
    <VueBackdrop :visible="visible" :className="'zIndex'" ></VueBackdrop>
  </aside>
</template>
<script>
  import {VueBackdrop} from 'vue-backdrop'
  export default {
    data() {
      return {
        visible: false,
        hidden: true
      };
    },
    props: {
      direction: {
        type: String,
        default: 'bottom'
      }
    },
    created(){
    },
    methods: {
      show(){
        this.visible = !this.visible;
      },
      hide(){
        this.visible = false;
      },
      _onTransitionEnd(){

      }
    },
    components: {VueBackdrop}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .popup {
    position: absolute;
    z-index: 11;
    width: 100%;
    border-top: 1px solid #f00;
    background: #fff;
    left: 0;
    backface-visibility: hidden;
    transition: transform 0.3s, -webkit-transform 0.3s;
    &[data-direction=top] {
      top: 0;
      transform: translateY(-100%);
      &[data-visible=true] {
        transform: translateY(0);
      }
    }
    &[data-direction=bottom] {
      bottom: 0;
      transform: translateY(100%);
      &[data-visible=true] {
        transform: translateY(0);
      }
    }
  }

  .zIndex {
    z-index: 2;
  }
</style>

