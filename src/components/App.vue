<template>
    <router-view >
    </router-view>
</template>
<script>
export default {
    data() {
        return {
            test:''
        }
    },
    created:function(){

    },
    methods:{

    },
    watch:{
        "$route":function(to,from){
            
        }
    }
}
</script>
<style>
@import url('../static/css/public.css');
</style>

