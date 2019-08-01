<template>
    <div>
        <button @click="add(10)">加1</button>
        <button @click="reduce(5)">减1</button>
        <h1>{{count}}</h1>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    methods: {
        // addHandle(){
        //     this.$store.commit('add')
        // },
        // reduceHandle(){
        //     this.$store.commit('reduce')
        // }
        ...mapMutations(["add","reduce"])
    },

// computed:{
// count(){
//     return this.$store => state.count
// }
// },
// computed:mapState({
//     count:state => state.count
// }),
// computed:{
//      ...mapState({count: state => state.count})
// },
computed:{
    ...mapState(["count"])
},
}
</script>