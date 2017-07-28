#vue-popup
> popup for vue.

## props:

```
 props: {
      visible: {
        type: Boolean
      },
      className: {
        type: String
      }
    },
```

## usage:
+ install:
```bash
npm install smalleast/vue-popup --save


```

+ code:
```javascript
import VuePopup from 'vue-popup';

new Vue({
  el: '#app',
  components: {VuePopup},
  methods: {
    _click1(){
      console.log('button');
    }
  },
  render: function (createElement) {
    return createElement('div',[
      createElement(VuePopup),
    ])
  }
});

```

+template
```
<template>
  <aside class="dev">
     <button class="button" v-on:click="_click()">show backdrop</button>
     <VuePopup ref="vnp" :direction="'bottom'">
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
       这是测试的数据
     </VuePopup>
   </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
