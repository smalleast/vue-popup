#vue-popup
> Backdrop for vue.

## props:

```
 props: {
      visible: {
        type: Boolean
      },
      className: {
        type: String
      },
      style: {
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
import VuePopup from 'vue-Backdrop';

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
    <div class="popup">
      <button v-on:click="_click()">show backdrop</button>
    </div>
    <VuePopup :visible="visible" :className="'zIndex'" :style="'z-index: 2;'"></VuePopup>
  </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
