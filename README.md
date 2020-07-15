# jwt

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Use UIkit
1.npm i uikit
2.src/App.vue  +
 <style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>
3.src/main.js +
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
4.example.vue +
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
### node.js
npm run server

https://github.com/yilinng/vue-node-uikit-jwt-todolist