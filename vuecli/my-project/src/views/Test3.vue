<template>
    <div>
        <button @click="add(10)">加1</button>
        <button @click="reduce(5)">减1</button>
        <button @click="addAction(20)">action加1(map)</button>
        <button @click="$store.dispatch('addAction',100)">action加1(单独)</button>
        <h1>{{count}}</h1> 
           <h1>{{count2}}</h1>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    methods: {
        // addHandle(){
        //     this.$store.commit('add')
        // },
        // reduceHandle(){
        //     this.$store.commit('reduce')
        // }
        ...mapMutations(["add","reduce"]),
         ...mapActions(["addAction"])
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
    ...mapState(["count"]),
     ...mapGetters(["count2"])
},
}
</script>
<style scoped>

</style>