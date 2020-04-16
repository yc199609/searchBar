<template>
    <el-card>
        <el-input 
            v-if="!hiddenInput"
            class="input"
            size="small"
            v-model="keyword" 
            :clearable="true" 
            placeholder="请输入内容"
        />

        <el-button
            v-if="!hiddenSearch"
            type="success"
            icon="el-icon-search" 
            plain
            size="small"
            @click="hanleClick('search')"
        >搜索</el-button>

        <el-button
            v-for="(item, index) in options"
            :key="index"
            :type="item.type"
            :icon="item.icon"
            plain
            size="small"
            @click="hanleClick(item.emit)"
        >{{item.title}}</el-button>
    </el-card>
</template>

<script>
export default {
    name: 'YcSearch',
    props:{
        options: {
            type: Array,
            default: () => ([])
        },
        hiddenSearch: {
            type: Boolean,
            default: false
        },
        hiddenInput: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            keyword: ''
        }
    },
    methods:{
        hanleClick(emit) {
            // 调用父组件中的方法
            try {
                this.$parent[emit](this.keyword);
            } catch (e) {
                console.error(`调用searchBar的组件中不存在${emit}方法`);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.el-card{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.el-button{
    margin: 0 10px;
}
.input{
    width: 150px;
}
</style>
