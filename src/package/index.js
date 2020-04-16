import Vue from 'vue'
import { Card , Icon, Button, Input } from 'element-ui'
import YcSearch from './index.vue';

Vue.use(Card)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Input)

YcSearch.install = function(Vue) {
    Vue.component(YcSearch.name, YcSearch)
}

export default YcSearch
